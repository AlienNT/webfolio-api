import {errorResponse, successResponse} from "../helpers/responseHelper.js";
import {Skill} from "../models/index.js";

class SkillController {
    async get(req, res) {
        try {
            const skills = await Skill.find({})

            if (!skills) {
                return errorResponse(res, {
                    status: 404,
                    errors: 'skills not found'
                })
            }

            return successResponse(res, {data: skills})
        } catch (e) {

            return errorResponse(res, {
                errors: 'get skills error'
            })
        }
    }

    async create(req, res) {
        try {

        } catch (e) {

            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async update(req, res) {
        try {

        } catch (e) {

            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async delete(req, res) {
        try {

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }
}

export default new SkillController()