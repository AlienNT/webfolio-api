export function getWorkFields(req) {
    const {en, ru, ua, image, path, codePath} = req?.body

    return {en, ru, ua, image, path, codePath}
}