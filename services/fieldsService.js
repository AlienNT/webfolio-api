class FieldsService {
    getSkillFields(req) {
        const {isActive, image, title, name} = req.body
        return {isActive, image, title, name}
    }
}

export default new FieldsService()