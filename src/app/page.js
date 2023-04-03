'use client';
import Image from 'next/image' //Image component do auto scalling -> helps in performance optimization as well as only loads image on demand
import styles from './page.module.css'
import Banner from '../../components/banner'
import Card from '../../components/card'



export default function Home() {

  const handleOnBannerBtnClick=()=>{
    console.log("Banner button")
  }

  return (
    <div className={styles.main}>
      <Banner buttonText="View Shops" handleOnClick={handleOnBannerBtnClick}></Banner>
      <Image className={styles.heroImage} src="/static/hero-image.png" width={700} height={400}></Image>
      
      <div className={styles.container}>
        <Card name="abcd" href="/home" imgUrl="/static/hero-image.png"></Card>
      </div>
    </div>

    
  )
}
