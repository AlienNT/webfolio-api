import {errorResponse, successResponse} from "../helpers/responseHelper.js";
import {Contact} from "../models/index.js";

class ContactController {
    async get(req, res) {
        try {
            const contacts = await Contact.find({})

            if (!contacts?.length) {
                return errorResponse(res, {
                    errors: 'contacts not found'
                })
            }

            return successResponse(res, {data: contacts})

        } catch (e) {
            console.log('get contacts error', e)
            return errorResponse(res, {
                errors: 'get contacts error'
            })
        }
    }

    async create(req, res) {
        try {
            const {title, type, value} = req?.body

            const newContact = await Contact.create({title, type, value})

            if (!newContact) {
                return errorResponse(res, {
                    errors: 'contact not created'
                })
            }

            return successResponse(res, {data: newContact})

        } catch (e) {
            console.log('create contact error')
            return errorResponse(res, {
                errors: 'create contact error'
            })
        }
    }

    async update(req, res) {
        try {
            const {title, type, value, _id} = req?.body

            const updatedContact = await Contact.findByIdAndUpdate(_id, {title, type, value})

            if (!updatedContact) {
                errorResponse(res, {
                    errors: 'contact not updated'
                })
            }

            return successResponse(res, {data: updatedContact})
        } catch (e) {
            console.log('contact update error', e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }

    async delete(req, res) {
        try {
            const {_id} = req?.body

            const deletedContact = await Contact.findByIdAndDelete(_id)

            if (!deletedContact) {
                return errorResponse(res, {
                    errors: 'contact not deleted'
                })
            }

            return successResponse(res, {data: deletedContact})
        } catch (e) {
            console.log('delete contact error', e)
            return errorResponse(res, {
                errors: 'error'
            })
        }
    }
}

export default new ContactController()