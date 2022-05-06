import axios from 'axios';
import { statusCode } from '../utils/helpers/HttpsStatus'
import getConfig from 'next/config';
import { getCookie } from 'cookies-next';


const { publicRuntimeConfig } = getConfig();

const baseUrl = publicRuntimeConfig.baseURL;

axios.defaults.baseURL = baseUrl;

const _get = (endpoint, token = null) => {
    return axios.get(endpoint, getHeader(null, token)).then(handleResponse)
}

const _post = (endpoint, data, contentType = "application/json", token = null) => {
    return axios.post(endpoint, data, getHeader(contentType, token)).then(handleResponse).catch(error => {
        return handleResponse(error.response)
    })
}

const handleResponse = (response) => {
    const data = response.data;

    switch (response.status) {
        case statusCode.forbidden:
        case 401:
            return result(false, data);
        case statusCode.notFound:
            return result(false, data);
        case statusCode.error:
            return result(false, data);
        case statusCode.badRequest:
            return result(false, data);
        default:
            return result(true, data);
    }
}

const result = (statusType, data) => {
    return {
        statusType,
        data
    }
}

const getHeader = (contentType = "application/json", token = null) => {
    if (!token) {
        token = getCookie('token')
    }
    if (token) {
        return {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': contentType
            }
        }
    } else {
        return {
            headers: {
                'Content-Type': contentType
            }
        }
    }
}

export const API = {
    'get': _get,
    'post': _post
};