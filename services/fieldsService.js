import {fieldName} from "../helpers/fieldName.js";

class FieldsService {
    getSkillFields(req) {
        // const {active, image, title} = req.body
        // return {active, image, title}
        return this.getFields(fieldName.SKILL, req)
    }
    getWorkFields(req){
        return this.getFields(fieldName.WORK, req)
    }

    getFields(fieldsConfig, req){
        const result = Object.keys(fieldsConfig).map(key => req.body?.[fieldsConfig[key]])
        console.log('result', result)
        return result
    }
}

export default new FieldsService()