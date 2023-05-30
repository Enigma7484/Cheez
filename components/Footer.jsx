import React from 'react'
import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/img/bg.png" objectFit="cover" layout='fill' alt=""/>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>
              CHEEZY GOODNESS OUT OF THIS WORLD!!!
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
            <p className={styles.text}>
              2nd Floor, Rangs KB Square, 736 Satmasjid Road
              <br /> Dhanmondi, Dhaka-1209
              <br /> 01312-195222
            </p>
            <p className={styles.text}>
              6, Road 17/A, Block-E
              <br /> Banani, Dhaka-1213 
              <br /> 01316-195220
            </p>
            <p className={styles.text}>
              4th Floor, 4 Natok Shoroni, 
              <br /> New Bailey Road, Dhaka-1000
              <br /> 01704-360944
            </p>
            <p className={styles.text}>
              Gareeb-e-Nawaz Avenue, House#34, Sector-11
              <br /> Uttara, Dhaka-1230
              <br /> 01321-180274
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              SUNDAY-SATURDAY
              <br /> 11AM - 11PM
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer