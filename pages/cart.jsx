import React from 'react'
import styles from "../styles/Cart.module.css"
import Image from "next/image"

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image 
                                    src="/img/SS.png" 
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>SPICY SHORISHA</span>
                        </td>
                        <td>
                            <span className={styles.price}>Tk.399</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>Tk.798</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image 
                                    src="/img/SS.png" 
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>SPICY SHORISHA</span>
                        </td>
                        <td>
                            <span className={styles.price}>Tk.399</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>Tk.798</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>Tk.798
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>Tk.0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>Tk.798
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default Cart