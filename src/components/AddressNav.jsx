import React, { useEffect } from "react";
import styles from "./AddressNav.module.css";
import locationIcon from "../assets/locationIcon.png";
import mycart from "../assets/mycart.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AddressNav({ id }) {
  let navigate = useNavigate();
  useEffect(() => {
    console.log(id);
  }, []);

  function checkforId(e) {
    e.preventDefault();
    if (id == undefined) {
      alert("No Items in the Cart");
    } else {
      navigate("/productcart/" + id);
    }
  }
  return (
    <>
      {/* <div className={styles.desktopDisplay}> */}
      <p className={styles.promoContent}>
        <span className={styles.star}>🌟</span> Get 5% Off your first order,{" "}
        <span className={styles.promoCode}>Promo: ORDER5</span>
      </p>
      <p className={styles.currentAddress}>
        <img
          className={styles.locIcon}
          src={locationIcon}
          alt="location Icon"
        />
        Regent Street, A4, A4201, London{" "}
        <span className={styles.changeloc}>Change Location</span>
      </p>
      <Link
        className={styles.mycartdiv}
        // to={`/productcart/${id}`}
        onClick={checkforId}
      >
        <img className={styles.mycartImg} src={mycart} alt="My cart" />
      </Link>
      {/* </div> */}
    </>
  );
}

export default AddressNav;
