import dayjs from "dayjs";
import {getTime} from "../helpers/dataHelper.js";

const config = {
    SECRET_KEY: process.env.SECRET_KEY,
    URL: process.env.DB_URL,
    API_ROUTE: process.env.API_ROUTE,
    PORT: process.env.PORT,
    REFRESH_TOKEN_EXPIRES: {
        number: getTime({days: 30}),
        date: dayjs().add(30, 'd').toDate(),
    },
    ACCESS_TOKEN_EXPIRES: getTime({hours: 1}),
    IS_COOKIE_SECURE: process.env.NODE_ENV !== "development",
    IS_DEVELOPMENT: process.env.NODE_ENV !== "development",
    CLIENT_HOST: process.env.NODE_ENV !== "development" ? 'http://192.168.0.100:5173' : '/',
    ORIGINS: [
        "http://172.24.48.1:5173",
        "http://localhost:5173"
    ],
    ACCESS_TOKEN: {
        options: {expiresIn: process.env.PROD ? '2m' : '1m'},
        payload:({_id}) => {
            return {_id}
        }
    }
}
export default config