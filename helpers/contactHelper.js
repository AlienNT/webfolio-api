export function getContactFields(req) {
    const {title, type, value} = req?.body

    return {title, type, value}
}