import React from "react";
import styles from "./OrderConfirmPage.module.css";
import AddressNav from "../components/AddressNav";
import logo1 from "../assets/logo1.png";
import userIcon from "../assets/userIcon.png";
import Footer from "../components/Footer";
import orderConfirmedIcon from "../assets/orderConfirmedIcon.png";

function OrderConfirmPage() {
  return (
    <div className={styles.confirmContainer}>
      <div className={styles.addressNav}>
        <AddressNav />
      </div>

      <div className={styles.navbar}>
        <img src={logo1} alt="logo" />
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Browse Menu</li>
          <li>Special Offers</li>
          <li>Restaurants</li>
          <li>Track Order</li>
        </ul>
        <div className={styles.loggedInUser}>
          <img src={userIcon} alt="user Icon" />
          <span>Hey Mike</span>
        </div>
      </div>

      <div className={styles.midContainer}>
        <img src={orderConfirmedIcon} className={styles.orderConfirmedIcon} />
        <p className={styles.successMessage}>Order Placed Successfully</p>
        <p className={styles.deliveryMessage}>
          Your order is confirmed and on its way. Get set to
          <br /> savor your chosen delights!
        </p>
        <div className={styles.displayOrderedItems}>
          <p>Royal Cheese Burger</p>
          <p>Potato Veggies</p>
          <button>Back to Home</button>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default OrderConfirmPage;
