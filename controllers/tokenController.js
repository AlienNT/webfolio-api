import {Token} from "../models/index.js";

class TokenController {
    async get(token) {
        try {
            return await Token.findOne({value: token})
        } catch (e) {
            console.log('TokenController GET error', e)
            return null
        }
    }
}

export default new TokenController()