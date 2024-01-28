import {errorResponse, successResponse} from "../helpers/responseHelper.js";
import {Work} from "../models/index.js";

class WorkController {
    async get(req, res) {
        try {
            const works = await Work.find({})

            if (!works) {
                return errorResponse(res, {
                    errors: 'works not found'
                })
            }

            return successResponse(res, {data: works})

        } catch (e) {
            console.log('work get error', e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async create(req, res) {
        try {
            const {en, ru, ua, image, path, codePath} = req?.body

            const newWork = await Work.create({en, ru, ua, image, path, codePath})

            if (!newWork) {
                return errorResponse(res, {
                    errors: 'work not created'
                })
            }

            return successResponse(res, {data: newWork})

        } catch (e) {
            console.log('work create error', e)
            return errorResponse(res, {
                errors: 'work create error'
            })
        }
    }

    async update(req, res) {
        try {
            const {en, ru, ua, image, path, codePath, _id} = req?.body

            const updatedWork = await Work.findByIdAndUpdate(_id, {en, ru, ua, image, path, codePath})

            if (!updatedWork) {
                return errorResponse(res, {
                    errors: 'work not updated'
                })
            }

            return successResponse(res, {data: updatedWork})

        } catch (e) {
            console.log('work update error', e)
            return errorResponse(res, {
                errors: 'work update error'
            })
        }
    }

    async delete(req, res) {
        try {
            const {_id} = req?.body

            const deletedWork = await Work.findByIdAndDelete(_id)

            if (!deletedWork) {
                return errorResponse(res, {
                    errors: 'work not deleted'
                })
            }

            return successResponse(res, {data: deletedWork})

        } catch (e) {
            console.log('delete work error', e)
            return errorResponse(res, {
                errors: 'delete work error'
            })
        }
    }
}

export default new WorkController()