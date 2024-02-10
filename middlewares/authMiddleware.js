import {getCookie, getToken, verifyUser} from "../helpers/authHelper.js";
import {errorResponse, setCookie, successResponse} from "../helpers/responseHelper.js";
import statusCode from "../helpers/statusCodeHelper.js";
import TokenController from "../controllers/tokenController.js";
import {User} from "../models/index.js";

export default async function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const {accessToken, refreshToken, savedToken} = req

        if (!accessToken && refreshToken) {
            const newTokens = await TokenController.create(req, res, refreshToken)


            if (!newTokens) {
                return errorResponse(res, {
                    status: statusCode.UNAUTHORIZED,
                    errors: ["user unauthorized"]
                })
            }

            setCookie(res, {
                name: 'refreshToken',
                value: refreshToken
            })

            return successResponse(res, {
                data: {
                    accessToken: newTokens?.accessToken
                }
            })

        }

        if (!accessToken || !refreshToken) {
            return errorResponse(res, {
                status: statusCode.UNAUTHORIZED,
                errors: ["user unauthorized"]
            })
        }
        const verifiedUser = verifyUser(accessToken)
        const id = verifiedUser?._id

        if (!id) {
            return errorResponse(res, {
                status: statusCode.UNAUTHORIZED,
                errors: ["token expired"]
            })
        }

        const user = await User.findById(id)

        if (!user) {
            return errorResponse(res, {
                status: statusCode.NOT_FOUND,
                errors: ["user not found. Unauthorized"]
            })
        }
        req.user = user

        next()
    } catch (e) {
        console.log('authMiddleware error', e)
        return errorResponse(res, {
            status: statusCode.UNAUTHORIZED,
            errors: ["authMiddleware error"]
        })
    }
}