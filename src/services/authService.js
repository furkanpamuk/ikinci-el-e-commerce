import { API } from '.'
import { successMessage, errorMessage } from '../utils/helpers/toastHelper'
import { setCookies } from 'cookies-next'

export const authLogin = (data) => {

    return API.post('auth/local', data).then(res => {
        if (res.statusType) {
            setCookies('token', res.data.jwt);
            successMessage('Giriş Başarılı');
        }
        else {
            errorMessage('Email veya Şifre Hatalıdır');
        }
        return res;
    })
}

export const authRegister = (data) => {
    return API.post('auth/local/register', data).then(res => {
        if (res.statusType) {
            setCookies('token', res.data.jwt);
            successMessage('Kayıt Başarılı');
        }
        else {
            errorMessage('Kayıt Başarısız');
        }
        return res;
    })
}