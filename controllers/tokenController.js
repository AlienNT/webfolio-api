import {errorResponse} from "../helpers/responseHelper.js";

class TokenController {
    async get(req, res) {
        try {

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async create(req, res) {
        try {

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async update(req, res) {
        try {

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async delete(req, res) {
        try {

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }
}
export default new TokenController()