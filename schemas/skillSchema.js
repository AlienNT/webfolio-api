import {Schema} from "mongoose";
import {fieldName} from "../helpers/fieldName.js";

export const skillSchema = new Schema({
    [fieldName.SKILL.TITLE]: {
        type: Schema.Types.String,
        required: [true, 'title is required'],
        minLength: 1,
        maxLength: 20
    },
    [fieldName.SKILL.ACTIVE]: {
        type: Schema.Types.Boolean,
        default: true
    },
    [fieldName.SKILL.IMAGE]: {
        type: Schema.Types.String
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})