import {Schema} from "mongoose";
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
    description: workDescription
})

export const workSchema = new Schema({
    en: workTranslateSchema,
    ru: workTranslateSchema,
    ua: workTranslateSchema,
    image: {
        type: Schema.Types.String
    },
    path: {
        type: Schema.Types.String,
        required: [true, 'path is required']
    },
    codePath: {
        type: Schema.Types.String,
        required: [true, 'code path is required']
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})