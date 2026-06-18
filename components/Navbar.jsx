import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <header className={styles.container}>
      <div className={styles.item}>
        <Link href="/" passHref>
          <a className={styles.brand} aria-label="Cheez homepage">
            <Image src="/img/Cheez.png" alt="Cheez" width={124} height={74} />
          </a>
        </Link>
      </div>

      <nav className={styles.item} aria-label="Primary navigation">
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/#menu" passHref>
              <a>Menu</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/#locations" passHref>
              <a>Locations</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <a href="tel:09638050505">Call</a>
          </li>
        </ul>
      </nav>

      <Link href="/cart" passHref>
        <a className={styles.item} aria-label={`Cart with ${quantity} items`}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width={26} height={26} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </a>
      </Link>
    </header>
  );
};

export default Navbar;
