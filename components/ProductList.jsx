import React from 'react';
import styles from "../styles/ProductList.module.css";
import PizzaCard from './PizzaCard';

const ProductList = ({ productList }) => {
  if (!Array.isArray(productList) || productList.length === 0) {
    // Handle the case when productList is not an array or is empty
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>CHEEZIEST PIZZAS IN TOWN</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nunc, porta a metus nec, sagittis imperdiet metus. Nulla condimentum leo rutrum dolor condimentum, eget ultricies nisl rhoncus. Proin dictum nisi ac mauris efficitur, sed euismod nisl blandit.
        </p>
        <p>No pizzas available.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHEEZIEST PIZZAS IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nunc, porta a metus nec, sagittis imperdiet metus. Nulla condimentum leo rutrum dolor condimentum, eget ultricies nisl rhoncus. Proin dictum nisi ac mauris efficitur, sed euismod nisl blandit.
      </p>
      <div className={styles.wrapper}>
        {productList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
