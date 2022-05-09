import React from 'react'
import styles from './UploadProduct.module.scss'


function UploadForm({ values, errors, handleChange, handleSubmit, colorList, categoryList, brandList, statusList }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formControl} >
                <p className={styles.formLabel} >Ürün Adı</p>
                <input
                    className={`${errors.name ? styles.errInp : ''}`}
                    type='text'
                    placeholder='Örnek: Iphone 12 Pro Max'
                    value={values.name}
                    name='name'
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formControl}>
                <p className={styles.formLabel} >Açıklama</p>
                <textarea
                    className={`${errors.name ? styles.errInp : ''}`}
                    name="description"
                    rows="3"
                    placeholder={'Ürün açıklaması girin'}
                    value={values.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className={styles.selectArea} >
                <div className={styles.selectField}>
                    <div className={styles.formControl} >
                        <p className={styles.formLabel} >Kategori</p>
                        <select
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                        >
                            <option hidden value="">Kategori</option>
                            {
                                categoryList.map((category, index) => (
                                    <option key={index} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className={styles.selectField}>
                    <div className={styles.formControl} >
                        <p className={styles.formLabel} >Marka</p>
                        <select
                            name="brand"
                            value={values.brand}
                            onChange={handleChange}
                        >
                            <option hidden value="">Marka</option>
                            {
                                brandList.map((brand, index) => (
                                    <option key={index} value={brand.name}>{brand.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className={styles.selectField}>
                    <div className={styles.formControl} >
                        <p className={styles.formLabel} >Renk</p>
                        <select
                            name="color"
                            value={values.color}
                            onChange={handleChange}
                        >
                            <option hidden value="">Renk</option>
                            {
                                colorList.map((color, index) => (
                                    <option key={index} value={color.name}>{color.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className={styles.selectField}>
                    <div className={styles.formControl} >
                        <p className={styles.formLabel} >Kullanım Durumu</p>
                        <select
                            name="status"
                            value={values.status}
                            onChange={handleChange}
                        >
                            <option hidden value="">Kullanım Durumu</option>
                            {
                                statusList.map((status, index) => (
                                    <option key={index} value={status.name}>{status.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.formControl} >
                <p className={styles.formLabel} >Fiyat</p>
                <input
                    className={`${errors.price ? styles.errInp : ''}`}
                    type='text'
                    placeholder='Bir fiyat girin'
                    value={values.price}
                    name='price'
                    onChange={handleChange}
                />
            </div>
            <div className={styles.offerableBox}>
                <span>Teklif opsiyonu</span>
                <label className={styles.switch}>
                    <input
                        type='checkbox'
                        id="checkbox"
                        name='isOfferable'
                        defaultChecked={values.isOfferable && 'checked'}
                        onChange={handleChange}
                    />
                    <div className={`${styles.slider} ${styles.round}`}></div>
                </label>
            </div>
            <div className={styles.buttonBox}>
                <button type='submit' >Kaydet</button>
            </div>
        </form>
    )
}

export default UploadForm