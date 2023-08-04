// import passport from "passport";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type * as express from "express";
import jwt from "jsonwebtoken";
import type { VerifiedCallback } from "passport-jwt";
import { ExtractJwt, Strategy } from "passport-jwt";

import { Config } from "@/app.config";
import type { AccessTokenInfo } from "@/entities";

dayjs.extend(relativeTime);

export type JWTOptions = {
	workspaceId?: string;
	expiresIn?: string | number;
};

var cookieExtractor = function (req) {
	var token = null;
	if (req && req.cookies) {
		token = req.cookies["x-auth-cookie"];
	}
	return token;
};

export const generateJWT = (userId: string, options?: JWTOptions) => {
	if (!options.expiresIn) options.expiresIn = process.env.JWT_EXPIRE_TIME || "2d";

	const { expiresIn } = options;
	const secret = Config.grab("JWT_SECRET", "123");
	const refreshSecret = Config.grab("JWT_REFRESH_SECRET");
	const payload = { id: userId, ...options };

	const accessToken = jwt.sign(payload, secret, {
		algorithm: "HS512",
		expiresIn,
	});
	const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: "7d" });

	return { accessToken, refreshToken };
};

export const refreshAccessToken = () => {};

export const verifyRefreshToken = (refreshToken: string): Promise<{ error: boolean; tokenDetails?: any; message: string }> => {
	const secret = Config.grab("JWT_REFRESH_SECRET");

	return new Promise(async (resolve, reject) => {
		// const userTokenSvc = new UserTokenService();
		// const userToken = await userTokenSvc.findOne({ token: refreshToken });
		// if (!userToken) return reject({ error: true, message: "Invalid refresh token" });

		jwt.verify(refreshToken, secret, (err, tokenDetails) => {
			if (err) return reject({ error: true, message: "Invalid refresh token" });
			resolve({
				tokenDetails,
				error: false,
				message: "Valid refresh token",
			});
		});
	});
};

export async function extractAccessTokenInfo(
	tokens: { access_token: string; refresh_token?: string },
	payload: { id: string; exp: number; workspaceId?: string }
) {
	let { access_token, refresh_token } = tokens;
	const { exp, workspaceId } = payload;

	let expiredDate = dayjs(new Date(exp * 1000));
	let expiredTimestamp = dayjs(new Date(exp * 1000)).diff(dayjs());
	let isExpired = expiredTimestamp <= 0;
	let expToNow = dayjs(new Date(exp * 1000)).fromNow();

	// log("Expired date >", expiredTimestamp, ">>:", expiredDate.format("YYYY-MM-DD HH:mm:ss"));
	// log(`Is token expired >>:`, isExpired, `(will expire ${expToNow})`);

	// If token is < 4 hours to expire, refresh it:
	if (refresh_token) {
		const expHourLeft = expiredTimestamp / 60 / 60 / 1000;
		const { error: isInvalidRefreshToken } = await verifyRefreshToken(refresh_token);
		// console.log("expHourLeft :>> ", expHourLeft);
		// console.log("isInvalidRefreshToken :>> ", isInvalidRefreshToken);

		if (isInvalidRefreshToken) return { isExpired: true };

		if (expHourLeft < 4 && !isInvalidRefreshToken) {
			const userId = payload.id;
			const { accessToken, refreshToken } = generateJWT(userId, { expiresIn: process.env.JWT_EXPIRE_TIME || "2d", workspaceId });
			access_token = accessToken;
			refresh_token = refreshToken;

			isExpired = false;
			expiredDate = dayjs(new Date(payload.exp * 1000));
			expiredTimestamp = dayjs(new Date(payload.exp * 1000)).diff(dayjs());
			expToNow = dayjs(new Date(payload.exp * 1000)).fromNow();

			console.log(`The token of ${userId} is about to expired ${expToNow} > Refreshed it!`);
		}
	}

	// assign "access_token" info to request:
	const token: AccessTokenInfo = {
		access_token,
		refresh_token,
		expiredTimestamp: expiredTimestamp,
		expiredDate: expiredDate.toDate(),
		expiredDateGTM7: expiredDate.format("YYYY-MM-DD HH:mm:ss"),
	};

	return { token, isExpired };
}

export const jwtStrategy = new Strategy(
	{
		secretOrKey: Config.grab("JWT_SECRET", "123"),
		jwtFromRequest: ExtractJwt.fromExtractors([
			ExtractJwt.fromAuthHeaderAsBearerToken(),
			ExtractJwt.fromUrlQueryParameter("access_token"),
			cookieExtractor,
		]),
		passReqToCallback: true,
		algorithms: ["HS512"],
	},
	async function (req: express.Request, payload: any, done: VerifiedCallback) {
		// console.log(`[1] AUTHENTICATE: jwtStrategy > payload...`, payload);
		const { DB } = await import("@/modules/api/DB");

		let access_token = req.query.access_token || req.cookies["x-auth-cookie"] || req.headers.authorization?.split(" ")[1];
		let refresh_token = req.query.refresh_token as string;
		// console.log("jwtStrategy > access_token :>> ", access_token);
		console.log("jwtStrategy > refresh_token :>> ", refresh_token);
		// console.log("jwtStrategy > payload :>> ", payload);
		// console.log(`[1] jwtStrategy > payload.id :>> `, payload.id);

		// 1. Extract token info
		const tokenInfo = await extractAccessTokenInfo({ access_token, refresh_token }, payload);
		console.log("jwtStrategy > tokenInfo :>> ", tokenInfo);
		// validating token...
		if (tokenInfo.isExpired) return done(JSON.stringify({ status: 0, messages: ["Access token was expired."] }), null);
		if (!tokenInfo || !tokenInfo.token) return done(JSON.stringify({ status: 0, messages: ["Missing access token."] }), null);

		// 2. Check if this access token is from a {User} or a {ServiceAccount}

		let user = await DB.findOne("user", { _id: payload.id }, { populate: ["roles", "workspaces", "activeWorkspace"] });
		console.log("jwtStrategy > user :>> ", user);
		if (user) {
			const isAccessTokenExisted = await DB.count("user", { _id: payload.id, "token.access_token": tokenInfo.token.access_token });
			if (isAccessTokenExisted === 0) {
				user = await DB.updateOne(
					"user",
					{ _id: payload.id },
					{ token: tokenInfo.token },
					{
						populate: ["roles", "workspaces", "activeWorkspace"],
					}
				);
			}
			// user.token.refresh_token = tokenInfo.token.refresh_token;
			return done(null, user);
		}

		// Maybe it's not a normal user, try looking for {ServiceAccount} user:
		let serviceAccount = await DB.findOne("service_account", { _id: payload.id }, { populate: ["roles", "workspaces", "activeWorkspace"] });

		if (!serviceAccount) return done(JSON.stringify({ status: 0, messages: ["Invalid service account (probably deleted?)."] }), null);

		return done(null, serviceAccount);
	}
);

// passport.use(jwtStrategy);
