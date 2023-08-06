import Express from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv'
import url from "url";
import config from "./config/index.js";
import router from "./routes/index.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()

const APP = new Express()
const filePath = __dirname + './view/dist'

APP
    .use(bodyParser.json({limit: '10mb'}))
    .use(cors())
    .use(Express.static(filePath))
    .use(config.API_ROUTE, router)


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

    } catch (e) {
        console.log(e)
    }
}
await start()