import jwt from "jsonwebtoken";
import config from "../config/index.js";
import {randomUUID} from "node:crypto";

class TokenService {
    generateTokens(userId) {
        try {
            return {
                accessToken: this.generateAccessToken(userId),
                refreshToken: this.generateRefreshToken()
            }
        } catch (e) {
            console.log('TokenService generateTokens error', e)
        }
    }

    generateAccessToken(userId) {
        return jwt.sign(config.ACCESS_TOKEN.payload({_id: userId}), config.SECRET_KEY, config.ACCESS_TOKEN.options)
    }

    generateRefreshToken() {
        return randomUUID()
    }
}

export default new TokenService()