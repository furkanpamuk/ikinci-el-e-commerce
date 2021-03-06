import { API } from ".";

export const getProductById = (id) => {
    return API.get(`products/${id}`).then(res => {
        return res
    })
}

export const getColorList = () => {
    return API.get('colors').then(res => {
        return res
    })
}

export const getCategoryList = () => {
    return API.get('categories').then(res => {
        return res
    })
}

export const getBrandList = () => {
    return API.get('brands').then(res => {
        return res
    })
}

export const getStatusList = () => {
    return API.get('using-statuses').then(res => {
        return res
    })
}

export const addNewProduct = (data) => {
    return API.post('products', data, 'multipart/form-data').then(res => {
        return res
    })
}

export const offerProduct = (data) => {
    return API.post('offers', data).then(res => {
        return res
    })
}

export const deleteOffer = (id) => {
    return API.delete(`offers/${id}`).then(res => {
        return res
    })
}

export const buyProduct = (data) => {
    return API.put(`products/${data.id}`, data).then(res => {
        return res
    })
}