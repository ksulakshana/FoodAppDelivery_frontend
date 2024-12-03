import React from "react";
import styles from "./CheckOutPage.module.css";
import AddressNav from "../components/AddressNav";
import logo1 from "../assets/logo1.png";
import userIcon from "../assets/userIcon.png";
import { Link } from "react-router-dom";
import orderDetailsHeading from "../assets/orderDetailsHeading.png";
import cartpizza from "../assets/cartpizza.png";
import locationIcon from "../assets/locationIcon.png";
import OrderPageLocIcon from "../assets/OrderPageLocIcon.png";
import orangeArrowRight from "../assets/orangeArrowRight.png";
import PopularRestaurant from "../components/PopularRestaurant";
import Footer from "../components/Footer";

function CheckOutPage() {
  return (
    <div className={styles.checkOutContainer}>
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

      <div className={styles.orderDetailsHeading}>
        <img src={orderDetailsHeading} />
      </div>

      <div className={styles.cartTotal}>
        <div className={styles.carts}>
          <div className={styles.cart}>
            <img src={cartpizza} />
            <div className={styles.cartItems}>
              <p>Royal Cheese Burger</p>
              <span>1x item</span>
            </div>
            <p>₹120</p>
          </div>
          <br />
          <div className={styles.breakline}></div>
          <br />
          <div className={styles.cart}>
            <img src={cartpizza} />
            <div className={styles.cartItems}>
              <p>Royal Cheese Burger</p>
              <span>1x item</span>
            </div>
            <p>₹120</p>
          </div>
        </div>
        {/* /********************************* */}
        <div className={styles.total}>
          <div className={styles.address}>
            <img
              src={OrderPageLocIcon}
              alt="location Icon"
              className={styles.locationIcon}
            />
            <div className={styles.deliveryAddress}>
              <p className={styles.deliveryHeading}>Delivery Address</p>
              <span>45, Green Street, Sector 12...</span>
            </div>
            <img src={orangeArrowRight} />
          </div>
          <br />
          <div className={styles.breakline}></div>

          <div className={styles.qtysubtotal}>
            <p>
              Items <span>₹230</span>
            </p>
            <p>
              Sales Tax<span>₹10</span>
            </p>
            <div className={styles.breakline}></div>
            <br />
            <p>
              Subtotal (3 items)
              <span className={styles.bold}>
                <b>₹240</b>
              </span>
            </p>
          </div>
          <br />
          <button className={styles.choosePayment}>
            Choose Payment Method
          </button>
        </div>
      </div>

      <div className={styles.similarRestaurants}>
        <PopularRestaurant />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default CheckOutPage;
