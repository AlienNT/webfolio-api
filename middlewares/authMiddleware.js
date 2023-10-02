import {getToken, verifyUser} from "../helpers/authHelper.js";
import {errorResponse} from "../helpers/responseHelper.js";
import statusCode from "../helpers/statusCodeHelper.js";
import {User} from "../models/index.js";

export default async function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = getToken(req)

        if (!token) {
            return errorResponse(res, {
                status: statusCode.UNAUTHORIZED,
                errors: ["user unauthorized"]
            })
        }
        const {_id} = verifyUser(token)
        const user = await User.findById(_id)

        if (!user) {
            return errorResponse(res, {
                status: statusCode.NOT_FOUND,
                errors: ["user not found. Unauthorized"]
            })
        }
        req.user = user

        next()
    } catch (e) {
        console.log(e)
        return errorResponse(res, {
            status: statusCode.UNAUTHORIZED,
            errors: ["user unauthorized"]
        })
    }
}