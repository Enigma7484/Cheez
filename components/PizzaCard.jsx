import React from 'react'
import Image from "next/image"
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/Pep.png" alt="" width="500" height="500"/>
        <h1 className={styles.title}>THE PEPPERONIA</h1>
        <span className={styles.price}>Tk.1199</span>
        <p className={styles.desc}>
            Classic Pepperoni Pizza 16"
        </p>
    </div>
  )
}

export default PizzaCard