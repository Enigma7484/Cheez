import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import ProductList from '../components/ProductList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddButton from '../components/AddButton';
import Add from '../components/Add';

export default function Home({ productList, admin }) {
  const [close, setClose] = useState(true);

  if (!productList || productList.length === 0) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Cheez</title>
          <meta name="description" content="Cheeziest Pizzas in town" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>No pizzas are available.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cheez</title>
        <meta name="description" content="Cheeziest Pizzas in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <ProductList productList={productList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;
  let productList = [];

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  try {
    const res = await axios.get('https://cheez.vercel.app/api/products');
    productList = res.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
  }

  return {
    props: {
      productList,
      admin,
    },
  };
}
