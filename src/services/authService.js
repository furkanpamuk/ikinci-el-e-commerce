import { API } from '.'
import { successMessage, errorMessage } from '../utils/helpers/toastHelper'
import { setCookies } from 'cookies-next'

export const authLogin = (data) => {

    return API.post('auth/local', data, null, false).then(res => {
        if (res.statusType) {
            setCookies('token', res.data.jwt);
            setCookies('userId', res.data.user.id)
            setCookies('user', res.data.user)
            successMessage('Giriş Başarılı');
        }
        else {
            errorMessage('Email veya Şifre Hatalıdır');
        }
        return res;
    })
}

export const authRegister = (data) => {
    return API.post('auth/local/register', data, null, false).then(res => {
        if (res.statusType) {
            setCookies('token', res.data.jwt);
            setCookies('userId', res.data.user.id)
            setCookies('user', res.data.user)
            successMessage('Kayıt Başarılı');
        }
        else {
            errorMessage('Kayıt Başarısız');
        }
        return res;
    })
}