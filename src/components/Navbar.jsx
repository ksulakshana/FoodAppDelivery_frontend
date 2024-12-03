import React, { useState, useEffect } from "react";
import login_SignUp from "../assets/login_SignUp.png";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import styles from "./Navbar.module.css";
import userIcon from "../assets/userIcon.png";
import { getUserData } from "../services/auth";

function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserData().then((res) => {
      if (!res.data) {
        setUser("");
      }
      if (res.data.userdata == null) {
        setUser("");
      }
      setUser(res.data.userdata.name);
    });
  }, []);
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
      {user == "" ? (
        <Link to="/login">
          <img
            className={styles.loginbtn}
            src={login_SignUp}
            alt="login or sign up"
          />
        </Link>
      ) : (
        <Link className={styles.loggedInUser} to="/profile">
          <img src={userIcon} alt="user Icon" />
          <span>Hey {user}&nbsp;</span>
        </Link>
      )}
    </>
  );
}

export default Navbar;
