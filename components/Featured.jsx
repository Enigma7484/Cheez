import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/SMG.png",
    "/img/4Ch.png",
    "/img/bolognese.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== images.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.copy}>
        <span className={styles.kicker}>Fresh dough. Big cheese. Fast pickup.</span>
        <h1 className={styles.title}>Cheez pizzas, built loud and served hot.</h1>
        <p className={styles.desc}>
          Signature pies, generous toppings, and weeknight orders that feel like a
          tiny celebration.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#menu">
            Order from the menu
          </a>
          <a className={styles.secondaryAction} href="tel:09638050505">
            Call 09638-050505
          </a>
        </div>
      </div>

      <div className={styles.stage}>
        <button
          className={`${styles.arrowButton} ${styles.arrowLeft}`}
          onClick={() => handleArrow("l")}
          aria-label="Previous featured pizza"
          type="button"
        >
          <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
        </button>
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * index}%)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={img}>
              <Image
                src={img}
                alt={`Featured Cheez pizza ${i + 1}`}
                layout="fill"
                objectFit="contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        <button
          className={`${styles.arrowButton} ${styles.arrowRight}`}
          onClick={() => handleArrow("r")}
          aria-label="Next featured pizza"
          type="button"
        >
          <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
        </button>
      </div> 
    </section>
  );
};

export default Featured;
