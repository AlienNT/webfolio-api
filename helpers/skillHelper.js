export function getSkillFields(req) {
    const {title, active, image} = req?.body

    return {title, active, image}
}