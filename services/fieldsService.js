import {fieldName} from "../helpers/fieldName.js";

class FieldsService {
    getTokenFields(tokenObject) {
        const {_id, value} = tokenObject
        return {_id, value}
    }
    getSkillFields(req) {
        return this.getFields(fieldName.SKILL, req)
    }

    getWorkFields(req) {
        return this.getFields(fieldName.WORK, req)
    }

    getFields(fieldsConfig, req) {
        const result = {}
        Object.keys(fieldsConfig).forEach(key => {
            const fieldName = fieldsConfig[key]

            if (req.body.hasOwnProperty(fieldName)) {
                result[fieldName] = req.body?.[fieldName]
            }
        })

        return result
    }
}

export default new FieldsService()