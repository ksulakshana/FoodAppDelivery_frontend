import React, { useEffect, useState } from "react";
import styles from "./PopularRestaurant.module.css";
import { Link } from "react-router-dom";
import { fetchRestaurants } from "../services/restaurant";
import e from "cors";

function PopularRestaurant() {
  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants().then((res) => {
      if (!res.data) {
        alert("No restaurants found");
      }
      setrestaurants(res.data);
    });
  }, []);

  return (
    <>
      <p className={styles.popularHeading}>Popular Restaurants</p>
      <div className={styles.popularRests}>
        {restaurants.map((restaurant, idx) => (
          <Link key={idx} to={`/product/${restaurant._id}`} target="_blank">
            <img src={restaurant.imageuri} alt={restaurant.name} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default PopularRestaurant;
