import React from "react";
import styles from "./Login.module.css";
import logoImage from "../assets/logo1.png";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.contentBody}>
        <div className={styles.leftContainer}>
          <div className={styles.innerDiv}>
            <img src={logoImage} className={styles.logoImg} />
            <p className={styles.welcomePara1}>Welcome Back 👋</p>
            <p className={styles.welcomePara2}>
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </p>
            <LoginForm />
            <p className={styles.registerLink}>
              Don't you have an account?<Link to="/register"> Sign up</Link>
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

export default Login;
