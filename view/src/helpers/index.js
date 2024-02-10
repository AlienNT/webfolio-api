export function indexByField({array, field = '_id', value}) {
    return array?.length ? array.findIndex(item => item[field] === value) : -1
}

export function isExist(index){
    return index >= 0
}