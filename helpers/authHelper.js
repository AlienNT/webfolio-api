import config from "../config/index.js";
import jwt from "jsonwebtoken";
import {randomUUID} from "node:crypto"
import bcrypt from "bcrypt"

export function generateAccessToken(_id) {
    const payload = {_id}
    return jwt.sign(payload, config.SECRET_KEY, {expiresIn: process.env.PROD ? '2m' : '1m'})
}

export function generateRefreshToken() {
    return randomUUID()
}

export const decryptAccessToken = (token) => {
    return jwt.verify(token, config.SECRET_KEY)
}
export const decryptTokenData = (req) => {
    return decryptAccessToken(req.headers.authorization.split(' ')[1]);
}

export function verifyUser(token) {
    try {
        return jwt.verify(token, config.SECRET_KEY);
    } catch (e) {
        console.log('token expired')
        return null
    }
}

export function getToken(req) {
    const authorizationHeader = req.headers.authorization
    return authorizationHeader ? authorizationHeader.split(' ')[1] : null
}

export function getCookie(req, cookieName) {
    return req?.cookies[cookieName]
}

export function getPublicAuthFields(user) {
    const {_id} = user

    return {_id}
}

export function getHash(string) {
    return bcrypt.hashSync(string, 7)
}

export function comparePassword(requestPass, userPass) {
    return bcrypt.compareSync(requestPass, userPass)
}