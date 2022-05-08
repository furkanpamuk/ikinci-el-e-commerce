import * as yup from 'yup'


export const addProductSchema = yup.object().shape({
    name: yup
        .string()
        .required('Bu alan zorunludur')
        .max(100, 'Ürün adı en fazla 100 karakter olabilir.'),
    description: yup
        .string()
        .required('Bu alan zorunludur')
        .max(500, 'Ürün açıklaması en fazla 500 karakter olabilir.'),
    category: yup
        .number()
        .required('Bu alan zorunludur')
        .moreThan(0, 'Bu alan zorunludur'),
    brand: yup
        .string()
        .required('Bu alan zorunludur'),
    color: yup
        .string()
        .required('Bu alan zorunludur'),
    status: yup
        .string()
        .required('Bu alan zorunludur'),
    price: yup
        .number('0-9 Arasında Bir Rakam Girin')
        .required('Bu alan zorunludur'),
    isOfferable: yup
        .boolean()
})