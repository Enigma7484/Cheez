import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import axios from 'axios'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import Add from '../components/Add'

export default function Home({ productList, admin }) {
  const [close, setClose] = useState(true);
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
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("https://cheezapp.onrender.com/api/products/")
  return {
    props: {
      productList: res.data,
      admin
    },
  };
}