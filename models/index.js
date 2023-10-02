import {model} from "mongoose";
import {userSchema} from "../schemas/userSchema.js";
import tokenSchema from "../schemas/tokenSchema.js";
import {skillSchema} from "../schemas/skillSchema.js";
import {workSchema} from "../schemas/workSchema.js";
import {contactSchema} from "../schemas/contactSchema.js";

export const User = model('User', userSchema)
export const Token = model('Token', tokenSchema)
export const Skill = model('Skill', skillSchema)
export const Work = model('Work', workSchema)
export const Contact = model('Contact', contactSchema)