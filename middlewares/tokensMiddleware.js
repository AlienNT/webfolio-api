import {getCookie, getToken} from "../helpers/authHelper.js";
import TokenController from "../controllers/tokenController.js";

export default async function (req, res, next) {
    console.log('TOKEN MIDDLEWARE')
    if (req.method === "OPTIONS") {
        next()
    }
   try {
       const accessToken = getToken(req)
       const refreshToken = getCookie(req, 'refreshToken')

       const savedToken = await TokenController.get(refreshToken)

       req.accessToken = accessToken
       req.refreshToken = refreshToken
       req.savedToken = savedToken
       req.isAdmin = !!savedToken

       next()
   } catch (e) {
       console.log('tokenController error', e)
       next()
   }
}