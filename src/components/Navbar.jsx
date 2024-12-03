import React from "react";
import login_SignUp from "../assets/login_SignUp.png";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <img src={logo1} alt="logo" />
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Browse Menu</li>
        <li>Special Offers</li>
        <li>Restaurants</li>
        <li>Track Order</li>
      </ul>
      <Link to="/login">
        <img
          className={styles.loginbtn}
          src={login_SignUp}
          alt="login or sign up"
        />
      </Link>
    </>
  );
}

export default Navbar;
