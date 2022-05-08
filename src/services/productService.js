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