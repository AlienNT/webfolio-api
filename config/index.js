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
    IS_COOKIE_SECURE: process.env.NODE_ENV !== "development"
}
export default config