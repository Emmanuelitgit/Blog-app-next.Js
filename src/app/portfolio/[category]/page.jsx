import React from 'react';
import styles from "./page.module.css";
import Button from '@/componets/button/Button';
import Image from 'next/image';

const Category = ({params}) => {
  console.log(params)
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          fill={true}
          className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category