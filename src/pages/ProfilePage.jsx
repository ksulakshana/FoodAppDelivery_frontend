import React from "react";
import styles from "./ProfilePage.module.css";
import AddressNav from "../components/AddressNav";
import logo1 from "../assets/logo1.png";
import userIcon from "../assets/userIcon.png";
import Footer from "../components/Footer";
import profileHeading from "../assets/profileHeading.png";
import userDP from "../assets/userDP.png";

function ProfilePage() {
  return (
    <div className={styles.profileContainer}>
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

      <div className={styles.profilemidSection}>
        <img src={profileHeading} className={styles.profileHeading} />
        <div className={styles.profileSecondRow}>
          <div>
            <img src={userDP} />
            <p>Mike Ross</p>
          </div>
          <button>Edit</button>
        </div>
        <div className={styles.profileData}>
          <div className={styles.profileFields}>
            <label for="name">Full Name</label>
            <input type="text" placeholder="Mike Ross" />
          </div>
          <div className={styles.profileFields}>
            <label for="name">Email Address</label>
            <input type="text" placeholder="mikeross@gmail.com" />
          </div>
          <div className={styles.profileFields}>
            <label for="name">Gender</label>
            <input type="text" placeholder="Male" />
          </div>
          <div className={styles.profileFields}>
            <label for="name">Country</label>
            <input type="text" placeholder="India" />
          </div>
        </div>

        <br />
        <div className={styles.breakline}></div>
        <br />

        <p className={styles.pmHeading}>Saved Payment Methods</p>
        <div className={styles.paymentMethods}></div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
