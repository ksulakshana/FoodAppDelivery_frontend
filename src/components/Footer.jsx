import React from "react";
import styles from "./Footer.module.css";
import logoImage from "../assets/logo1.png";
import appStoreIcon from "../assets/AppStoreIcons.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import tiktok from "../assets/TikTok.png";
import snapchat from "../assets/Snapchat.png";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img
            src={logoImage}
            alt="logo Image"
            className={styles.logostyling}
          />
          <img
            src={appStoreIcon}
            alt="App Store Image"
            className={styles.appStoreIcons}
          />
          <p className={styles.footerlogoPara}>
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div className={styles.subscribeSection}>
          <p className={styles.subscribeSectionPara}>
            Get Exclusive Deals in your Inbox
          </p>
          <div className={styles.subemailSection}>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className={styles.subscribeEmailInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p className={styles.noSpamText}>
            we wont spam, read our <span>email policy</span>
          </p>
          <div className={styles.socialIcons}>
            <img src={facebook} alt="facebook Image" />
            <img src={instagram} alt="instagram Image" />
            <img src={tiktok} alt="tiktok Image" />
            <img src={snapchat} alt="snapchat Image" />
          </div>
        </div>
        <div className={styles.legalLinks}>
          <p className={styles.legalHeading}>Legal Pages</p>
          <p className={styles.legalLink}>Terms and conditions</p>
          <p className={styles.legalLink}>Privacy</p>
          <p className={styles.legalLink}>Cookies</p>
          <p className={styles.legalLink}>Modern Slavery Statement</p>
        </div>
        <div className={styles.importantLinks}>
          <p className={styles.legalHeading}>Important Links</p>
          <p className={styles.legalLink}>Get help</p>
          <p className={styles.legalLink}>Add your restaurant</p>
          <p className={styles.legalLink}>Sign up to deliver</p>
          <p className={styles.legalLink}>Create a business account</p>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p className={styles.copyrightPara}>
          Order.uk Copyright 2024, All Rights Reserved.
        </p>
        <ul className={styles.aboutMe}>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Pricing</li>
          <li>Do not sell or share my personal information</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
