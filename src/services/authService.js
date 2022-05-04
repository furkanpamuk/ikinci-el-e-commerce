import { API } from '.'
import { successLogin, errorLogin } from '../utils/helpers/toastHelper'
import { setCookies } from 'cookies-next'

export const authLogin = (data) => {

    return API.post('auth/local', data).then(res => {
        if (res.statusType) {
            setCookies('token', res.data.jwt);
            successLogin();
        }
        else {
            errorLogin();
        }
        return res;
    })
}