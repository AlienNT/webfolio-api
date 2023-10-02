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
}, {
    timestamps: true,
})

tokenSchema.index({createdAt: 1}, {expireAfterSeconds: 60 * 60 * 24})

export default tokenSchema