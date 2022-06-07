import { API } from '.'

export const getUserProducts = (userId) => {
    return API.get(`products?users_permissions_user=${userId}`).then(res => {
        return res
    })
}

export const getUserOffers = (userId, token) => {
    return API.get(`offers?users_permissions_user=${userId}`, true, token).then(res => {
        return res
    })
}
