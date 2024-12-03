import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import logo1 from "../assets/logo1.png";
import login_SignUp from "../assets/login_SignUp.png";
import AddressNav from "../components/AddressNav";
import userIcon from "../assets/userIcon.png";
import min_order from "../assets/min_order.png";
import delivery_time from "../assets/delivery_time.png";
import Restaurant_food_img from "../assets/Restaurant_food_img.png";
import Clock from "../assets/Clock.png";
import RestaurantCartFoodItems from "../components/RestaurantCartFoodItems";
import Location from "../components/Location";
import Review from "../components/Review";
import PopularRestaurant from "../components/PopularRestaurant";
import Footer from "../components/Footer";
import { getUserData } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchOneRestaurant } from "../services/restaurant";

function ProductPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  let params = useParams();
  const [restaurantName, setRestaurantName] = useState();
  const [restaurantImage, setRestaurantImage] = useState();
  const [restId, setRestId] = useState();

  const [foodItems, setFoodItems] = useState();

  useEffect(() => {
    const restaurantId = params.id;
    setRestId(restaurantId);

    getUserData().then((res) => {
      if (!res.data) {
        alert("please login to visit the dashboard page");
        navigate("/login");
      }
      setUser(res.data.userdata.name);
    });

    fetchOneRestaurant(restaurantId).then((res) => {
      console.log(res.data);
      setRestaurantName(res.data.name);
      setRestaurantImage(res.data.imageuri);
    });
  }, []);

  return (
    <div className={styles.productPageContainer}>
      <div className={styles.addressNav}>
        <AddressNav id={restId} />
      </div>
      <div className={styles.navbar}>
        <img src={logo1} alt="logo" />
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Special Offers</li>
          <li className={styles.pageOpened}>Restaurants</li>
          <li>Track Order</li>
        </ul>
        <Link className={styles.loggedInUser} to="/profile">
          <img src={userIcon} alt="user Icon" />
          <span>Hey {user}&nbsp;</span>
        </Link>
      </div>

      <div className={styles.restaurantDetails}>
        <div className={styles.leftFlexSection}>
          <p className={styles.flexFirstpara}>I'm lovin' it!</p>
          <p className={styles.restaurantName}>{restaurantName}</p>
          <div className={styles.deliveryTimeInfo}>
            <p className={styles.minOrder}>
              <img src={min_order} alt="min_order" />
              <span>Minimum Order: 12 GBP</span>
            </p>
            <p className={styles.deliveryTime}>
              <img src={delivery_time} alt="delivery_time" />
              <span>Delivery in 20-25 Minutes</span>
            </p>
          </div>
          <div className={styles.opentill}>
            <img src={Clock} alt="Clock" />
            <span>Open until 3:00 AM</span>
          </div>
        </div>
        <div className={styles.rightFlexSection}>
          <img src={restaurantImage} alt="Restaurant_food_img" />
        </div>
      </div>
      <div className={styles.offersAndItems}>
        <RestaurantCartFoodItems />
      </div>
      <div className={styles.restaurantLocationMap}>
        <Location />
      </div>
      <div className={styles.customerReview}>
        <Review />
      </div>
      <div className={styles.similarRestaurants}>
        <PopularRestaurant />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
