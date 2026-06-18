import React from 'react';
import styles from "../styles/ProductList.module.css";
import PizzaCard from './PizzaCard';

const ProductList = ({ productList }) => {
  if (!Array.isArray(productList) || productList.length === 0) {
    // Handle the case when productList is not an array or is empty
    return (
    <section className={styles.container} id="menu">
      <h1 className={styles.title}>CHEEZIEST PIZZAS IN TOWN</h1>
      <p className={styles.desc}>
        Fresh-baked crusts, layered cheese pulls, and bold house toppings ready
        for pickup or delivery.
      </p>
      <p>No pizzas available.</p>
    </section>
    );
  }

  return (
    <section className={styles.container} id="menu">
      <span className={styles.kicker}>Menu favorites</span>
      <h2 className={styles.title}>Cheeziest pizzas in town</h2>
      <p className={styles.desc}>
        Choose a signature pie, tune the size, add your extras, and get the
        kind of pizza night that does not need a committee meeting.
      </p>
      <div className={styles.wrapper}>
        {productList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
