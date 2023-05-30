import React, { useState } from 'react'
import styles from "../../styles/Product.module.css"
import Image from "next/image"

const Product = () => {
    const [size, setSize] = useState(0)
    const pizza = {
      id: 1,
      img: "/img/SS.png",
      name: "SPICY SHORISHA",
      price: [399, 1049, 1249, 1399],
      desc: "Shrimp Pizza with a fiery kick"
    }

    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} objectFit="contain" layout='fill' alt=""/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>Tk.{pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/img/size.png" alt="" layout="fill"/>
                    <span className={styles.number}>8"</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/img/size.png" alt="" layout="fill"/>
                    <span className={styles.number}>12"</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/img/size.png" alt="" layout="fill"/>
                    <span className={styles.number}>14"</span>
                </div>
                <div className={styles.size} onClick={() => setSize(3)}>
                    <Image src="/img/size.png" alt="" layout="fill"/>
                    <span className={styles.number}>16"</span>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Product