import React from "react";
import styles from "./PaymentPage.module.css";
import AddressNav from "../components/AddressNav";
import logo1 from "../assets/logo1.png";
import userIcon from "../assets/userIcon.png";
import Footer from "../components/Footer";
import chooseandpay from "../assets/chooseandpay.png";
import { Link } from "react-router-dom";
import walletIcon from "../assets/walletIcon.png";
import orangeArrowRight from "../assets/orangeArrowRight.png";
import MaestroIcon from "../assets/MaestroIcon.png";
import paypal from "../assets/paypal.png";
import stripe from "../assets/stripe.png";

function PaymentPage() {
  return (
    <div className={styles.paymentPageContainer}>
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
        <Link>
          <img src={chooseandpay} />
        </Link>
        <div className={styles.makePayment}>
          <div className={styles.selectPaymentMethod}>
            <div className={styles.wallet}>
              <img src={walletIcon} className={styles.walletIcon} />
              <div className={styles.walletbalance}>
                <p>Wallet</p>
                <span>Available balance: ₹300</span>
              </div>
              <img src={orangeArrowRight} className={styles.orangeArrowRight} />
            </div>
            <br />
            <div className={styles.breakline}></div>
            <br />
            <div className={styles.otherPaymentModes}>
              <div className={styles.MaestroKard}>
                <img src={MaestroIcon} className={styles.MaestroIcon} />
                <p className={styles.MaestroKard1}>MaestroKard</p>
                <input type="radio" />
              </div>
              <div className={styles.paypal}>
                <img src={paypal} className={styles.paypalIcon} />
                <p className={styles.paypal1}>PayPal</p>
                <input type="radio" />
              </div>
              <div className={styles.stripe}>
                <img src={stripe} className={styles.stripeIcon} />
                <p className={styles.stripe1}>Stripe</p>
                <input type="radio" />
              </div>
              <div className={styles.addDebitCard}>
                <span>+</span>
                <p className={styles.stripe1}>Add Debit Card</p>
              </div>
            </div>
          </div>
          <div className={styles.pay}>
            <div className={styles.totalPay}>
              <p>Amount to be payed</p>
              <span>₹240</span>
            </div>
            {/* <br /> */}
            <div className={styles.breakline}></div>
            <br />
            <button>Proceed Payment</button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default PaymentPage;
