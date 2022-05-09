import React, { useState } from 'react'
import { FaPlus, FaUser } from "react-icons/fa";
import logo from "../../assets/logo/logo.svg"
import styles from './Header.module.scss'
import Image from 'next/image';
import { useUserData } from '../../context/userContext';
import Link from 'next/link';
import { getCookies } from 'cookies-next';
import { useEffect } from 'react';

function Header() {

    const { isLogin, setIsLogin } = useUserData();

    useEffect(() => {
        if (getCookies('token')) {
            setIsLogin(true)
        }
        else {
            setIsLogin(false)
        }
    }, [isLogin])

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo} >
                    <Link href={'/'} >
                        <Image width={128} src={logo} alt='logo' />
                    </Link>
                </div>
                <div className={styles.rightContent}>
                    {isLogin
                        ?
                        (
                            <>
                                <Link href={'/uploadproduct'}>
                                    <div className={styles.addProduct} >
                                        <FaPlus />
                                        <div className={styles.addProductButton}> Ürün Ekle </div>
                                    </div>
                                </Link>
                                <Link href={'/account'}>
                                    <div className={styles.account}>
                                        <FaUser /> Hesabım
                                    </div>
                                </Link>
                            </>
                        )
                        : (
                            <Link href='/login'>
                                <div className={styles.account} >
                                    <FaUser /> Giriş Yap
                                </div>
                            </Link>
                        )}
                </div>
            </div>
        </header>
    );
}

export default Header