'use client';
import styles from './banner.module.css'
import Link from 'next/link';

const Banner =(props)=>{
    return (<div className={styles.container}>
                <h1 className={styles.title}> <span className={styles.title1}>FoodShop</span> <span className={styles.title2}>Finder</span> </h1>
                <p className={styles.subTitle}> Discover your local food shops</p>
                <button onClick={props.handleOnClick} className={styles.button} > {props.buttonText} </button>
            </div>)
}
 
export default Banner;

