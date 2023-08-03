import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder, onClose, orderId }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch the order data from the backend API using the orderId
    axios.get(`https://cheez.vercel.app/orders/${orderId}`)
      .then((res) => setOrder(res.data))
      .catch((error) => console.error("Error fetching order:", error));
  }, [orderId]);

  const handleCreateOrder = () => {
    // Create the order with the entered customer and address details
    createOrder({
      customer: customer,
      address: address,
      total: total,
      method: 0,
    });
  };

  // Render the order details here if the order is available
  if (order) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <button className={styles.closebutton} onClick={onClose}>
            x
          </button>
          <h1 className={styles.title}>You will pay ${total} after delivery.</h1>
          <div className={styles.item}>
            <label className={styles.label}>Name Surname</label>
            <input
              placeholder="John Doe"
              type="text"
              className={styles.input}
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="text"
              placeholder="+1 234 567 89"
              className={styles.input}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea
              rows={5}
              placeholder="Elton St. 505 NY"
              type="text"
              className={styles.textarea}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className={styles.button} onClick={handleCreateOrder}>
            Order
          </button>
        </div>
      </div>
    );
  }

  // Show a loading message while fetching the order data
  return <div>Loading...</div>;
};

export default OrderDetail;
