import React, { useState, useEffect } from 'react'
import Container from '../../constant/containers/Container'
import UploadForm from './UploadForm'
import styles from './UploadProduct.module.scss'
import { Formik } from 'formik'
import { getCookie } from 'cookies-next'
import { addProductSchema } from '../../constant/schemas/addProductSchema'
import uploadImg from '../../assets/images/upload.png'
import Image from 'next/image'
import { successMessage, errorMessage } from '../../utils/helpers/toastHelper'
import { useCallback } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { addNewProduct } from '../../services/productService';
import { useDropzone } from "react-dropzone";

function UploadProduct({ colorList, categoryList, brandList, statusList }) {
    const defaultValues = {
        name: "",
        description: "",
        category: "",
        brand: "",
        color: "",
        status: "",
        price: null,
        isOfferable: true,
        isSold: false,
        users_permissions_user: getCookie('userId')
    }

    const [formValues, setFormValues] = useState(defaultValues)

    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [myFiles, setMyFiles] = useState([]);


    const removeImage = () => {

        setMyFiles([]);
    };
    const onDrop = useCallback(
        (acceptedFiles) => {
            setMyFiles([...myFiles, ...acceptedFiles]);
        },
        [myFiles]
    );
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/jpeg, image/jpg, image/png",
        maxFiles: 1,
        maxSize: 409600,
    });


    const handleFormSubmit = async (values, resetForm) => {
        setFormValues(values);
        if (myFiles.length < 1) {
            errorMessage('Lütfen ürün resmi seçiniz')
        }
        else {
            let data = new FormData()
            data.append('data', JSON.stringify(values))
            data.append('files.image', myFiles[0])
            const result = await addNewProduct(data)

            if (result.statusType) {
                successMessage('Ürün yükleme başarılı')
                resetForm()
                setMyFiles([])
            }
            else {
                errorMessage('Ürün yükleme başarısız')
            }
        }
    }


    return (
        <Container>
            <div className={styles.uploadProduct}>
                <div className={styles.productDetail}>
                    <h2>Ürün Detayları</h2>
                    <Formik
                        initialValues={formValues}
                        validationSchema={addProductSchema}
                        onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}
                    >
                        {
                            ({
                                values,
                                errors,
                                handleChange,
                                handleSubmit }) =>
                                <UploadForm
                                    colorList={colorList}
                                    categoryList={categoryList}
                                    brandList={brandList}
                                    statusList={statusList}
                                    values={values}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                />
                        }
                    </Formik>
                </div>
                <div className={styles.uploadImage}>
                    <div {...getRootProps({ className: "dropzone" })}>
                        <h1 className={styles.title}>Ürün Görseli</h1>
                        {myFiles.length === 1 ? (
                            !uploadSuccess ? (
                                <div className={styles.acceptedFile}>
                                    <img src={URL.createObjectURL(myFiles[0])} alt="selected pic" />
                                    <div className={styles.removeIcon} onClick={removeImage}>
                                        <FaTimesCircle />
                                    </div>
                                </div>
                            ) : (
                                <div>Yükleniyor</div>
                            )
                        ) : (
                            <>
                                <input {...getInputProps()} />
                                <div className={styles.uploadContainer}>
                                    <div className={styles.uploadIcon}>
                                        <Image src={uploadImg} />
                                    </div>
                                    <p>Sürükleyip Bırakarak Yükle</p>
                                    <p>Veya</p>
                                    <div className={styles.selectImage}>Görsel Seçin</div>
                                    <p className={styles.size}>
                                        Png veya JPEG Dosya Boyutu: max. 100kb
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UploadProduct