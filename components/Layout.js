import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/cartSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CartPersistence = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const hydrated = useRef(false);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      dispatch(updateCart(JSON.parse(cartData)));
    }

    hydrated.current = true;
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated.current) return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return null;
};

const Layout = ({ children }) => {
  return (
    <>
      <CartPersistence />
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
