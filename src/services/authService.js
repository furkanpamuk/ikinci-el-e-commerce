import { API } from '.'
import { successLogin, errorLogin } from '../utils/helpers/toastHelper'
import { setCookies } from 'cookies-next'

export const authLogin = (data) => {

    return API.post('auth/local', data).then(res => {
        if (res.statusType) {
            setCookies('token', res.data.jwt);
            successLogin('Giriş Başarılı');
        }
        else {
            errorLogin('Email veya Şifre Hatalıdır');
        }
        return res;
    })
}

export const authRegister = (data) => {
    return API.post('auth/local/register', data).then(res => {
        if (res.statusType) {
            setCookies('token', res.data.jwt);
            successLogin('Kayıt Başarılı');
        }
        else {
            errorLogin('Kayıt Başarısız');
        }
        return res;
    })
}