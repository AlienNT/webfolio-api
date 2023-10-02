import {Schema} from "mongoose";

export const skillSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: [true, 'title is required'],
        minLength: 1,
        maxLength: 20
    },
    active: {
        type: Schema.Types.Boolean,
        default: true
    },
    image: {
        type: Schema.Types.String
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})