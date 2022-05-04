import toast from "../../components/toast/Toast"

const notify = ((type, message) => {
    toast({ type, message });
});

const successType = 'success'
const errorType = 'error'

export const successLogin = () => {
    notify(successType, 'Giriş Başarılı')
}

export const errorLogin = () => {
    notify(errorType, 'Email veya Şifre Hatalıdır')
}
