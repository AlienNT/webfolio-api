import {Schema} from "mongoose";

export const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
}, {
    timestamps: true
})