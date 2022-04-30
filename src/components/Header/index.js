import React from 'react'
import { FaPlus, FaUser } from "react-icons/fa";
import logo from "../../assets/logo/logo.svg"
import styles from './Header.module.scss'
import Image from 'next/image';

function index() {

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo} >
                    <Image width={128} src={logo} alt='logo' />
                </div>
                <div className={styles.rightContent}>

                    {true ? (
                        <>
                            <div className={styles.addProduct} >
                                {" "}
                                <FaPlus /> <div className={styles.addProductButton}> Ürün Ekle </div>
                            </div>
                            <div className={styles.account}>
                                {" "}
                                <FaUser /> Hesabım
                            </div>
                        </>
                    ) : (
                        <div className={styles.account} >
                            {" "}
                            <FaUser /> Giriş Yap
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default index