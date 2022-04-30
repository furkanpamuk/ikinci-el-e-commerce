import React from 'react'
import BannerPic from '../../../assets/images/Banner1.png'
import Img from 'next/image'
import styles from './Banner.module.scss'
import Container from '../../../constant/containers/Container'


function Banner() {
  return (
    <div className={styles.banner} >
      <Container>
        <Img src={BannerPic}></Img>
      </Container>
    </div>
  )
}

export default Banner