import React from "react";
import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  const startingPrice = pizza.prices?.[0] ?? 0;

  return (
    <article className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <a className={styles.imageLink}>
          <Image src={pizza.img} alt={pizza.title} width="500" height="500" />
        </a>
      </Link>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{pizza.title}</h3>
          <p className={styles.desc}>{pizza.desc}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>From Tk.{startingPrice}</span>
          <Link href={`/product/${pizza._id}`} passHref>
            <a className={styles.button}>Customize</a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
