import {errorResponse, successResponse} from "../helpers/responseHelper.js";
import {Work} from "../models/index.js";
import statusCode from "../helpers/statusCodeHelper.js";
import FieldsService from "../services/fieldsService.js";

class WorkController {
    async get(req, res) {
        try {
            const works = await Work.find({})

            if (!works) {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['works not found']
                })
            }
            return successResponse(res, {
                data: works
            })
        } catch (e) {
            console.log('WorkController GET error', e)
            return errorResponse(res, {
                errors: ['get works error']
            })
        }
    }

    async create(req, res) {
        try {
            const fields = FieldsService.getWorkFields(req)
            const newWork = await Work.create(fields)

            if (!newWork) {
                return errorResponse(res, {
                    errors: ['user not created']
                })
            }

            return successResponse(res, {
                data: newWork
            })
        } catch (e) {
            console.log('WorkController CREATE error', e)
            return errorResponse(res, {
                errors: ['create work error']
            })
        }
    }

    async update(req, res) {
        try {
            const {id} = req?.params
            const fields = FieldsService.getSkillFields(req)

            const updatedWork = await Work.findByIdAndUpdate(id, fields)

            if (!updatedWork) {
                return errorResponse(res, {
                    errors: [`work ${id} not updated`]
                })
            }
            return successResponse(res, {
                data: updatedWork
            })
        } catch (e) {
            console.log('WorkController UPDATE error', e)
            return errorResponse(res, {
                errors: ['update work error']
            })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params

            const deletedWork = await Work.findByIdAndDelete(id)

            if (!deletedWork) {
                return errorResponse(res, {
                    errors: [`work ${id} not deleted`]
                })
            }
            return successResponse(res, {
                data: deletedWork
            })
        } catch (e) {
            console.log('WorkController DELETE error', e)
            return errorResponse(res, {
                errors: ['delete work error']
            })
        }
    }
}

export default new WorkController()