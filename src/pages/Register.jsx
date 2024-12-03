import React from "react";
import styles from "./Register.module.css";
// import artImage from "../assets/Art.png";
import logoImage from "../assets/logo1.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <div className={styles.RegisterContainer}>
      <div className={styles.contentBody}>
        <div className={styles.leftContainer}>
          <div className={styles.innerDiv}>
            <img src={logoImage} className={styles.logoImg} />
            <p className={styles.welcomePara1}>Welcome 👋</p>
            <p className={styles.welcomePara2}>
              Today is a new day. It's your day. You shape it. Sign up to start
              ordering.
            </p>
            <RegisterForm />
            <p className={styles.registerLink}>
              Already have an account?<Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img
            src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733196953/Art_iqnpe0.png"
            alt="art Image"
            className={styles.rightImage}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Register;
