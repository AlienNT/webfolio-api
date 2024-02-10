import {errorResponse, successResponse} from "../helpers/responseHelper.js";
import {Skill} from "../models/index.js";
import FieldsService from "../services/fieldsService.js";
import statusCode from "../helpers/statusCodeHelper.js";

class SkillController {
    async get(req, res) {
        try {
            const {isAdmin} = req
            const skills = await Skill.find(isAdmin ? {} : {active: true}).lean()

            if (!skills) {
                return errorResponse(res, {
                    status: 404,
                    errors: 'skills not found'
                })
            }

            return successResponse(res, {data: skills})
        } catch (e) {
            console.log('skillController GET error', e)
            return errorResponse(res, {
                errors: 'get skills error'
            })
        }
    }

    async create(req, res) {
        try {
            const skillFields = FieldsService.getSkillFields(req)

            const newSkill = await Skill.create(skillFields)

            if (!newSkill) {
                return errorResponse(res, {
                    status: statusCode.BAD_REQUEST,
                    errors: ['skill not created']
                })
            }

            return successResponse(res, {
                data: newSkill
            })
        } catch (e) {
            console.log('skillController CREATE error', e)
            return errorResponse(res, {
                errors: ['skill create error']
            })
        }
    }

    async update(req, res) {
        try {
            const {id} = req?.params
            const skillFields = FieldsService.getSkillFields(req)

            const updatedSkill = await Skill.findByIdAndUpdate(id, skillFields)

            if (!updatedSkill) {
                return errorResponse(res, {
                    errors: [`skill ${id} not updated`]
                })
            }

            return successResponse(res, {
                data: updatedSkill
            })
        } catch (e) {
            console.log('skillController UPDATE error', e)
            return errorResponse(res, {
                errors: ['skill update error']
            })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req?.params

            const deletedSkill = await Skill.findByIdAndDelete(id)

            if (!deletedSkill) {
                return errorResponse(res, {
                    errors: [`skill ${id} not deleted`]
                })
            }

            return successResponse(res, {
                data: deletedSkill
            })
        } catch (e) {
            console.log('skillController DELETE error', e)
            return errorResponse(res, {
                errors: ['delete skill error']
            })
        }
    }
}

export default new SkillController()