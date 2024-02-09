import Express from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import url from "url";
import cors from 'cors'
import config from "./config/index.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()

const APP = new Express()
const filePath = __dirname + './view/dist'

APP
    .use(cors())
    .use(cookieParser())
    .use(bodyParser.json({limit: '10mb'}))
    .use(config.API_ROUTE, router)
    .use(Express.static(filePath))


const start = async () => {
    try {
        await mongoose.connect(config.URL, {
                useNewUrlParser: true,
                useUnifiedTopology: false
            }
        )
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