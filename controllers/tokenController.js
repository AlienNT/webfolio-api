import {Token} from "../models/index.js";
import {generateAccessToken, generateRefreshToken} from "../helpers/authHelper.js";
import TokenService from "../services/tokenService.js";

class TokenController {
    async get(token) {
        try {
            return await Token.findOne({value: token})
        } catch (e) {
            console.log('TokenController GET error', e)
            return null
        }
    }

    async create(req, res) {
        try {
            const {userId} = req
            const {remoteAddress} = req.socket
            const userAgent = req.headers['user-agent']

            const tokens = await Token
                .find({user: userId})
                .sort({orderNumber: 1})

            if (tokens?.length >= 5) {
                const oldestToken = tokens[0]

                const deletedToken = await Token.deleteOne(oldestToken._id)

                if (!deletedToken) {
                    return null
                }
            }

            const {refreshToken, accessToken} = TokenService.generateTokens(userId)

            const {value} = await Token.create({
                value: refreshToken,
                user: userId,
                ipAddress: remoteAddress,
                userAgent
            })
            return value ? {
                refreshToken,
                accessToken
            } : null
        } catch (e) {
            console.log('TokenController CREATE error', e)
            return null
        }
    }

    deleteRefreshToken(req) {
        try {
            const targetRefreshToken = req.cookies?.refreshToken
            return Token.findOneAndDelete({value: targetRefreshToken})
        } catch (e) {
            console.log('TokenController DELETE error', e)
            return null
        }
    }
}

export default new TokenController()