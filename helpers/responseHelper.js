import statusCode from "./statusCodeHelper.js";
import config from "../config/index.js";

const cookieConfig = {
    secure: config.IS_COOKIE_SECURE,
    httpOnly: config.IS_COOKIE_SECURE,
    expires: config.REFRESH_TOKEN_EXPIRES.date,
    sameSite: "none"

}


export function successResponse(response, {
    status = statusCode.OK,
    data
}) {
    return response.status(status).json({data, status})
}

export function errorResponse(response, {
    status = statusCode.BAD_REQUEST,
    errors
}) {
    return response.status(status).json({errors, status})
}

export function setCookie(response, {
    name = '',
    value = '',
    config = cookieConfig
}) {
    response.cookie(
        name,
        value,
        config
    )
}

export function clearCookie(response, {
    name = '',
    config = cookieConfig
}) {
    response.clearCookie(
        name,
        config
    )
}

export function checkRequireFields(fields, errorMessage) {
    return Object.keys(fields).map(key =>
        !fields[key]?.length ?
            `${errorMessage} ${key}` :
            null
    ).filter(item => !!item)
}

export function exclude(fields) {
    return setFields(fields, 0)
}

export function include(fields) {
    return setFields(fields, 1)
}

function setFields(fields, value) {
    const object = {}

    fields.forEach(field => {
        object[field] = value
    })

    return object
}

export const returnBefore = {
    returnDocument: 'before'
}
export const returnAfter = {
    returnDocument: 'after'
}

export function response(
    res,
    {
        value = {} || [],
        errorCode = statusCode.BAD_REQUEST,
        successCode = statusCode.OK,
        data = value,
        errorMessages = ['error']
    }
) {
    return !!value ?
        successResponse(res, {
            status: successCode,
            data: data
        }) :
        errorResponse(res, {
            status: errorCode,
            errors: errorMessages
        })
}