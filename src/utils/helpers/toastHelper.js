import toast from "../../components/toast/Toast"

const notify = ((type, message) => {
    toast({ type, message });
});

const successType = 'success'
const errorType = 'error'

export const successLogin = (message) => {
    notify(successType, message)
}

export const errorLogin = (message) => {
    notify(errorType, message)
}
