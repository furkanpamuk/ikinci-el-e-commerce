import axios from 'axios';
import { statusCode } from '../utils/helpers/HttpsStatus'
import getConfig from 'next/config';
import { getCookie } from 'cookies-next';


const { publicRuntimeConfig } = getConfig();

const baseUrl = publicRuntimeConfig.baseURL;

axios.defaults.baseURL = baseUrl;

const _get = (endpoint) => {
    return axios.get(endpoint).then(handleResponse)
}

const _post = (endpoint, data, contentType = "application/json") => {
    return axios.post(endpoint, data, getHeader(contentType)).then(handleResponse).catch(error => {
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

const getHeader = (contentType) => {
    const token = getCookie('token'); // Token çekildi
    if (token) {
        return {
            'Authorization': `Bearer ${token}`,
            'Content-Type': contentType
        }
    } else {
        return {
            'Content-Type': contentType
        }
    }
}

export const API = {
    'get': _get,
    'post': _post
};