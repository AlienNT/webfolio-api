import {errorResponse, successResponse} from "../helpers/responseHelper.js";
import {Skill} from "../models/index.js";
import {getSkillFields} from "../helpers/skillHelper.js";
import statusCode from "../helpers/statusCodeHelper.js";

class SkillController {
    async get(req, res) {
        try {
            const {user} = req

            const skills = user ?
                await Skill.find({}) :
                await Skill.find({active: true})

            if (!skills) {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: 'skills not found'
                })
            }

            return successResponse(res, {data: skills})
        } catch (e) {
            console.log('skill get error', e)
            return errorResponse(res, {
                errors: 'get skills error'
            })
        }
    }

    async create(req, res) {
        try {
            const fields = getSkillFields(req)

            const newSkill = await Skill.create(fields)

            if (!newSkill) {
                return errorResponse(res, {
                    errors: 'create skill error'
                })
            }

            return successResponse(res, {data: newSkill})

        } catch (e) {
            console.log('skill create error', e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async update(req, res) {
        try {
            const fields = getSkillFields(req)

            const foundedSkill = await Skill.findByIdAndUpdate(_id, fields)

            if (!foundedSkill) {
                return errorResponse(res, {
                    errors: 'skill not found'
                })
            }
            return successResponse(res, {data: foundedSkill})

        } catch (e) {
            console.log('skill update error', e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async delete(req, res) {
        try {
            const {_id} = req?.body

            const deletedSkill = await Skill.findOneAndDelete(_id)

            if (!deletedSkill) {
                return errorResponse(res, {
                    errors: 'skill not deleted'
                })
            }

            return successResponse(res, {data: deletedSkill})

        } catch (e) {
            console.log('skill delete error', e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }
}

export default new SkillController()