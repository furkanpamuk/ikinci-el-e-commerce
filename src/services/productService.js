import { API } from ".";

export const getProductById = (id) => {
    return API.get(`products/${id}`).then(res => {
        return res
    })
}