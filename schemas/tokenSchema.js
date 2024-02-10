import {Schema} from "mongoose";

const tokenSchema = new Schema({
    value: {
        type: Schema.Types.String,
        unique: true,
    },
    ipAddress: {
        type: Schema.Types.String,
    },
    userAgent: {
        type: Schema.Types.String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
})

tokenSchema.index({createdAt: 1}, {expireAfterSeconds: 60 * 60 * 24})

export default tokenSchema