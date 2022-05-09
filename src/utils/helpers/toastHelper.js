import toast from "../../components/toast/Toast"

const notify = ((type, message) => {
    toast({ type, message })
});

const successType = 'success'
const errorType = 'error'

export const successMessage = (message) => {
    notify(successType, message)
}

export const errorMessage = (message) => {
    notify(errorType, message)
}
