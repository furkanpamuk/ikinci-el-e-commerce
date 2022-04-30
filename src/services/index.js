import axios from 'axios';
import { statusCode } from '../utils/helpers/HttpsStatus'
import getConfig from 'next/config';

//import { Redirect } from 'next';

const { publicRuntimeConfig } = getConfig();

const baseUrl = publicRuntimeConfig.baseURL;

axios.defaults.baseURL = baseUrl;

const _get = (endpoint) => {
    return axios.get(endpoint).then(handleResponse)
}

const handleResponse = (response) => {
    const data = response.data;
    if(response.status === statusCode.forbidden ){
        // clear cookie
    }
    else if( response.status === statusCode.notFound ) {
        // redirect 404 page      
    }
    else if ( response.status === statusCode.error){
        // 500 error
    }
    else if( response.status === statusCode.badRequest ) {

    }
    return data
}

export const API = {
    'get': _get
};