import React from "react";
import styles from "./MyCart.module.css";
import cart from "../assets/cart.png";
import remove from "../assets/remove.png";
import downArrow from "../assets/downArrow.png";
import rightArrow from "../assets/rightArrow.png";
import delivery from "../assets/delivery.png";
import pickup from "../assets/pickup.png";
import pinkcheckout from "../assets/pinkcheckout.png";
import greencheckout from "../assets/greencheckout.png";

function MyCart() {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.basketHeading}>
        <img src={cart} />
        <p>My Basket</p>
      </div>
      <div className={styles.cartItems}>
        <p className={styles.quantity}>1x</p>
        <div className={styles.foodInfo}>
          <span className={styles.price}>₹120</span>
          <span className={styles.itemName}>Royal Cheese Burger</span>
          <span className={styles.extra}>With extra fries</span>
        </div>
        <img src={remove} />
      </div>
      <div className={styles.breakline}></div>
      <div className={styles.cartItems}>
        <p className={styles.quantity}>1x</p>
        <div className={styles.foodInfo}>
          <span className={styles.price}>₹120</span>
          <span className={styles.itemName}>Royal Cheese Burger</span>
          <span className={styles.extra}>With extra fries</span>
        </div>
        <img src={remove} />
      </div>
      <div className={styles.breakline}></div>
      <div className={styles.breakdownBill}>
        <p className={styles.subtotal}>
          Sub Total: <span>₹230.00</span>
        </p>
        <p className={styles.discount}>
          Discounts: <span>-₹3.00</span>
        </p>
        <p className={styles.deliveryfee}>
          Delivery Fee: <span>₹3.00</span>
        </p>
      </div>
      <div className={styles.breakline}></div>
      <br />
      <p className={styles.totalBill}>
        Total to pay <span>₹230.00</span>
      </p>
      <br />
      <div className={styles.breakline}></div>
      <br />
      <p className={styles.chooseFree}>
        Choose your free item..
        <img src={downArrow} />
      </p>
      <br />
      <p className={styles.couponCode}>
        Apply Coupon Code here
        <img src={rightArrow} />
      </p>
      <br />
      <div className={styles.breakline}></div>
      <br />
      <div className={styles.deliveryInfo}>
        <div className={styles.delivery}>
          <img src={delivery} alt="delivery" />
          <span className={styles.delheading}>Delivery</span>
          <span className={styles.timings}>Starts at 17:50</span>
        </div>
        <span className={styles.barrier}></span>
        <div className={styles.pickup}>
          <img src={pickup} alt="pickup" />
          <span className={styles.delheading}>Collection</span>
          <span className={styles.timings}>Starts at 16:50</span>
        </div>
      </div>
      <br />
      <div className={styles.below200Checkoutbg}>
        <img src={pinkcheckout} />
        <span>Checkout!</span>
      </div>
      <br />
      <div className={styles.Checkoutbg}>
        <img src={greencheckout} />
        <span>Checkout!</span>
      </div>
      <br />
    </div>
  );
}

export default MyCart;
