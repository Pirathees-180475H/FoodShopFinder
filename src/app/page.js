'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Banner from '../../components/banner'


export default function Home() {

  const handleOnBannerBtnClick=()=>{
    console.log("Banner button")
  }

  return (
    <div className={styles.main}>
      <Banner buttonText="View Shops" handleOnClick={handleOnBannerBtnClick}></Banner>
      Home Page
    </div>
  )
}
