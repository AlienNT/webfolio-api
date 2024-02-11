import Express from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import url from "url";
import cors from 'cors'
import config from "./config/index.js";
import router from "./routes/index.js";
import StayAwakeController from "./controllers/stayAwakeController.js";
import cookieParser from "cookie-parser";
import tokensMiddleware from "./middlewares/tokensMiddleware.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()

const APP = new Express()
const filePath = __dirname + './view/dist'

APP
    .use(cors({
        origin: config.ORIGINS,
        credentials: true,
    }))
    .use(cookieParser())
    .use(bodyParser.json({limit: '10mb'}))
    .all('/api/*', tokensMiddleware)
    .use(config.API_ROUTE, router)
    .use(Express.static(filePath))


const start = async () => {
    try {
        await mongoose.connect(config.URL)
        APP.listen(config.PORT, () => {
            console.log('server started in port: ', config.PORT)
        })
        APP.get('/', (req, res) => {
            res.sendFile(filePath + '/index.html')
        })

    } catch (e) {
        console.log(e)
    }
}
await start()


async function stayAwayRequest(counter = 1) {
    return await StayAwakeController.stayAwayRequest().then(() => {
        setTimeout(async () => {
            const result = await stayAwayRequest(counter += 1)
            console.log('stay awake counter', counter)

            return result
        }, 1000 * 60 * 5)
    })
}

await stayAwayRequest(1)