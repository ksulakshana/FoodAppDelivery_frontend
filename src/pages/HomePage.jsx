import React from "react";
import styles from "./HomePage.module.css";
import Category from "../components/Category";
import PopularRestaurant from "../components/PopularRestaurant";
import KnowMore from "../components/KnowMore";
import Statistics from "../components/Statistics";
import logo1 from "../assets/logo1.png";
import notification3 from "../assets/notification3.png";
import notification2 from "../assets/notification2.png";
import notification1 from "../assets/notification1.png";
import shoppingbasket from "../assets/shoppingbasket.png";
import submitarrow from "../assets/submitarrow.png";
import Footer from "../components/Footer";
import AddressNav from "../components/AddressNav";
import menu from "../assets/menu.png";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className={styles.HomePageContainer}>
      <div className={styles.addressNav}>
        <AddressNav />
      </div>

      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchInput}>
          <p className={styles.searchPara1}>
            Order Restaurant food, takeaway and groceries.
          </p>
          <p className={styles.searchPara2}>
            Feast Your Senses, <br />
            <span>Fast and Fresh</span>
          </p>
          <p className={styles.searchPara3}>
            Enter a postcode to see what we deliver
          </p>
          <div className={styles.subemailSection}>
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className={styles.zcodeInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
        <div className={styles.orangebar}>
          <img
            src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197067/eating_pizza_ni24c0.png"
            className={styles.pizza}
          />

          <img
            src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197067/eating_noodles_oesvej.png"
            className={styles.noodles}
          />
          <div className={styles.delivered1}>
            <img src={notification1} alt="notification1" />
          </div>
          <div className={styles.delivered2}>
            <img src={notification2} alt="notification2" />
          </div>
          <div className={styles.delivered3}>
            <img src={notification3} alt="notification3" />
          </div>
        </div>
      </div>

      {/* *****************mobile code start******  */}
      <div className={styles.mobileAddressNav}>
        <img className={styles.mobilelogo} src={logo1} alt="logo" />
        <img className={styles.mobilemenu} src={menu} alt="menu" />
      </div>

      <div className={styles.mobileNavbar}>
        <div className={styles.userName}>Hey Mike</div>
        <div className={styles.mobileCart}>
          <img src={shoppingbasket} />
          <span>My Cart</span>
        </div>
      </div>
      <div className={styles.mobileSearchBar}>
        <p className={styles.mobpara1}>
          Order Restaurant food, takeaway and groceries.
        </p>
        <p className={styles.mobpara2}>
          Feast Your Senses,
          <br />
          <span>Fast and Fresh</span>
        </p>
        <p className={styles.mobPara3}>
          Enter a postcode to see what we deliver
        </p>
        <div className={styles.mobilesubemailSection}>
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className={styles.mzcodeInput}
          />
          <img className={styles.msearchButton} src={submitarrow} />
        </div>
      </div>
      {/* *****************mobile code ends******  */}

      <div className={styles.dealsAndCategory}>
        <Category />
      </div>
      <div className={styles.popularRestaurant}>
        <PopularRestaurant />
      </div>
      <div className={styles.OrderingAppImage}>
        <img
          src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197179/OrderingApp_mvnygu.png"
          alt="orderingApp"
        />
      </div>
      <div className={styles.partnerOrRide}>
        <img
          src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197210/partnerwithus_uoghnu.png"
          alt="partner"
        />
        <img
          src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197210/ridewithus_oadgnx.png"
          alt="ride"
        />
      </div>
      <div className={styles.knowMore}>
        <KnowMore />
      </div>
      <div className={styles.statistics}>
        <Statistics />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
