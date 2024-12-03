import React from "react";
import styles from "./Address.module.css";
import AddressNav from "../components/AddressNav";
import Footer from "../components/Footer";
import logo1 from "../assets/logo1.png";
import userIcon from "../assets/userIcon.png";
import addressBackBtn from "../assets/addressBackBtn.png";
import { Link } from "react-router-dom";
import addAddressIcon from "../assets/addAddressIcon.png";
import NewAddress from "../components/NewAddress";
import { useState } from "react";

function Address() {
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <div className={styles.addressContainer}>
      <div className={styles.addressNav}>
        <AddressNav />
      </div>
      <div className={styles.navbar}>
        <img src={logo1} alt="logo" />
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Special Offers</li>
          <li className={styles.pageOpened}>Restaurants</li>
          <li>Track Order</li>
        </ul>
        <div className={styles.loggedInUser}>
          <img src={userIcon} alt="user Icon" />
          <span>Hey Mike</span>
        </div>
      </div>

      <div className={styles.midContainer}>
        <Link>
          <img src={addressBackBtn} alt="go back" />
        </Link>
        <div className={styles.addresses}>
          <div className={styles.addNewAddress}>
            <Link onClick={handleModalOpen}>
              <img src={addAddressIcon} />
            </Link>
            <span>Add Address</span>
          </div>
          <div className={styles.address}>
            <div className={styles.firstLine}>
              <p>Mike Ross</p>
              <span>Default</span>
            </div>
            <div className={styles.address1}>
              <p>
                45, Green Street, Sector 12,
                <br />
                New Delhi, 110001, India
              </p>
              <p>Phone Number: 8734637468</p>
            </div>
            <div className={styles.editAddress}>
              <span>Edit</span>
              <span>|</span>
              <span>Remove</span>
            </div>
          </div>

          <div className={styles.address}>
            <div className={styles.firstLine}>
              <p>Mike Ross</p>
            </div>
            <div className={styles.address1}>
              <p>
                45, Green Street, Sector 12,
                <br />
                New Delhi, 110001, India
              </p>
              <p>Phone Number: 8734637468</p>
            </div>
            <div className={styles.editAddress}>
              <span>Edit</span>
              <span>|</span>
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
      {openModal && <NewAddress closeModal={setOpenModal} />}
    </div>
  );
}

export default Address;
