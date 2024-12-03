import React from "react";
import styles from "./KnowMore.module.css";
import placeOrder from "../assets/placeOrder.png";
import trackProgress from "../assets/trackProgress.png";
import getOrder from "../assets/getOrder.png";

function KnowMore() {
  return (
    <>
      <div className={styles.knowmoreHeading}>
        <p>Know more about us!</p>
        <ul>
          <li>Frequent Questions</li>
          <li>Who we are?</li>
          <li>Partner Program</li>
          <li>Help & Support</li>
        </ul>
      </div>
      <div className={styles.whitebackgroundContent}>
        <div className={styles.flexrow}>
          <ul className={styles.leftflexColumn}>
            <li>How does Order.UK work?</li>
            <li>What payment methods are accepted?</li>
            <li>Can I track my order in real-time?</li>
            <li>
              Are there any special discounts or
              <br />
              promotions available?
            </li>
            <li>Is Order.UK available in my area?</li>
          </ul>
          <div className={styles.rightflexColumn}>
            <div className={styles.gridboxes}>
              <div className={styles.box}>
                <p className={styles.boxFirstLine}>Place an Order!</p>
                <img
                  className={styles.boxImage}
                  src={placeOrder}
                  alt="placeOrder"
                />
                <p className={styles.boxSecondLine}>
                  Place order through our website or Mobile app
                </p>
              </div>
              <div className={styles.box}>
                <p className={styles.boxFirstLine}>Place an Order!</p>
                <img
                  className={styles.boxImage}
                  src={trackProgress}
                  alt="trackProgress"
                />
                <p className={styles.boxSecondLine}>
                  Your can track your order status with delivery time
                </p>
              </div>
              <div className={styles.box}>
                <p className={styles.boxFirstLine}>Place an Order!</p>
                <img
                  className={styles.boxImage}
                  src={getOrder}
                  alt="getOrder"
                />
                <p className={styles.boxSecondLine}>
                  Receive your order at a lighting fast speed!
                </p>
              </div>
            </div>
            <p>
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu,
              <br /> select your favorite dishes, and proceed to checkout. Your
              delicious meal will be
              <br /> on its way to your doorstep in no time!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowMore;
