import {Schema} from "mongoose";

export const contactSchema = new Schema({
    title: {
        type: Schema.Types.String
    },
    type: {
        type: Schema.Types.String,
        default: 'social'
    },
    value: {
        type: Schema.Types.String,
        required: [true, 'value is required']
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})