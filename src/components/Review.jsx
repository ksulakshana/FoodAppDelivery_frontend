import React from "react";
import styles from "./Review.module.css";
import scrollArrow from "../assets/scrollArrow.png";
import customerReview from "../assets/customerReview.png";

function Review() {
  return (
    <>
      <p className={styles.reviewHeading}>
        <span>Customer Reviews</span>
        <img src={scrollArrow} alt="scrollArrow" />
      </p>
      <div className={styles.reviews}>
        <img src={customerReview} alt="customer review" />
        <img src={customerReview} alt="customer review" />
        <img src={customerReview} alt="customer review" />
      </div>
    </>
  );
}

export default Review;
