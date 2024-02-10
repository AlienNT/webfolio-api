import {Schema} from "mongoose";
import {fieldName} from "../helpers/fieldName.js";

const workTitle = {
    type: Schema.Types.String,
    required: [true, 'work title is required'],
    minLength: 2,
    maxLength: 60
}
const workDescription = {
    type: Schema.Types.String,
    required: false,
    minLength: 2,
    maxLength: 200
}

const workTranslateSchema = new Schema({
    title: workTitle,
    description: workDescription,
})

export const workSchema = new Schema({
    en: workTranslateSchema,
    ru: workTranslateSchema,
    ua: workTranslateSchema,
    [fieldName.WORK.IMAGE]: {
        type: Schema.Types.String
    },
    [fieldName.WORK.PATH]: {
        type: Schema.Types.String,
        required: [true, 'path is required']
    },
    [fieldName.WORK.CODE_PATH]: {
        type: Schema.Types.String,
        required: [true, 'code path is required']
    },
    [fieldName.WORK.CHIPS]: {
        type: Schema.Types.String
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})