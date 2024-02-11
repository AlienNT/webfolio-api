import jwt from "jsonwebtoken";
import config from "../config/index.js";
import {Token} from "../models/index.js";
import FieldsService from "./fieldsService.js";
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
        try {
            if (!userId) return null

            return jwt.sign(
                config.ACCESS_TOKEN.payload({_id: userId}),
                config.SECRET_KEY,
                config.ACCESS_TOKEN.options
            )
        } catch (e) {
            console.log('generateAccessToken error', e)
        }
    }

    generateRefreshToken() {
        return randomUUID()
    }

    async refreshToken({req, oldToken, user}) {
        try {
            const refreshedToken = await Token.findOneAndDelete({value: oldToken})

            const {refreshToken, accessToken} = await this.createTokens({
                req,
                userId: user?._id
            })

            if (refreshToken) {
                await this.replaceTokenInUser({
                    user,
                    tokenId: refreshedToken?._id,
                    newTokenId: refreshToken?._id
                })
            }
            return {
                refreshToken: FieldsService.getTokenFields(refreshToken),
                accessToken
            }
        } catch (e) {
            console.log('REFRESH TOKEN SERVICE error', e)
        }
    }

    async createTokens({req, userId}) {
        console.log('TOKEN SERVICE createTokens')
        try {
            const {remoteAddress} = req.socket
            const userAgent = req.headers['user-agent']

            const tokens = await Token
                .find({user: userId})
                .sort({orderNumber: 1})

            if (tokens?.length >= 5) {
                await Token.deleteOne(tokens[0]?._id)
            }

            const {refreshToken, accessToken} = this.generateTokens(userId)

            const newToken = await Token.create({
                value: refreshToken,
                user: userId,
                ipAddress: remoteAddress,
                userAgent
            })

            return newToken ? {
                refreshToken: FieldsService.getTokenFields(newToken),
                accessToken
            } : null
        } catch (e) {
            console.log('tokenService createTokens error', e)
        }
    }

    async saveTokenInUser({user, tokenId}) {
        user.tokens.push(tokenId)
        user.save()
    }

    async replaceTokenInUser({user, tokenId, newTokenId}) {
        const index = user.tokens.findIndex(id => id === tokenId)

        if (index >= 0) {
            user.tokens.splice(index, 0)
            user.tokens.push(newTokenId)
            user.save()
        }
    }
}

export default new TokenService()