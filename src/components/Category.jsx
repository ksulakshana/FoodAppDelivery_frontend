import React from "react";
import styles from "./Category.module.css";
import burgers from "../assets/burgers.png";
import salads from "../assets/salads.png";
import pasta from "../assets/pasta.png";
import pizza from "../assets/pizza.png";
import breakfast from "../assets/breakfast.png";
import soups from "../assets/soups.png";

function Category() {
  return (
    <>
      <div className={styles.deals}>
        <p>Up to -40% 🎊 Order.uk exclusive deals</p>
        <ul className={styles.dealmenu}>
          <li>Vegan</li>
          <li>Sushi</li>
          <li className={styles.selected}>Pizza & Fast food</li>
          <li>others</li>
        </ul>
      </div>
      <div className={styles.mobiledeals}>
        {/* mobile deal menu */}
        <p>Up to -40% Discount Offers 🎊 </p>
        <select className={styles.mobileDealmenu}>
          <option>Vegan</option>
          <option>Sushi</option>
          <option>Pizza & Fast food</option>
          <option>others</option>
        </select>
        {/* mobile deal menu */}
      </div>
      <div className={styles.restaurantDeals}>
        {/* <div className={styles.div1}> */}
        <img
          className={styles.div1}
          src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197127/chef_burgers_london_bqljxi.png"
        />
        <img
          className={styles.div1}
          src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197128/grand_ai_cafe_london_ljiozv.png"
        />
        <img
          className={styles.div1}
          src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197127/butterbrot_london_znupfr.png"
        />
        {/* </div> */}
      </div>
      <p className={styles.popularCategoryHeading}>
        Order.uk Popular Categories 🤩
      </p>
      <div className={styles.popularCategories}>
        <div className={styles.category}>
          <div className={styles.categoryImg}>
            <img src={burgers} alt="burgers" />
            <p>Burgers & Fast food</p>
            <span>21 Restaurants</span>
          </div>
          {/* <div className={styles.categoryInfo}></div> */}
        </div>
        <div className={styles.category}>
          <div className={styles.categoryImg}>
            <img src={salads} alt="salads" />
            <p>Salads</p>
            <span>32 Restaurants</span>
          </div>
          <div className={styles.categoryInfo}></div>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryImg}>
            <img src={pasta} alt="pasta" />
            <p>Pasta & Casuals</p>
            <span>4 Restaurants</span>
          </div>
          <div className={styles.categoryInfo}></div>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryImg}>
            <img src={pizza} alt="pizza" />
            <p>Pizza</p>
            <span>32 Restaurants</span>
          </div>
          <div className={styles.categoryInfo}></div>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryImg}>
            <img src={breakfast} alt="breakfast" />
            <p>Breakfast</p>
            <span>4 Restaurants</span>
          </div>
          <div className={styles.categoryInfo}></div>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryImg}>
            <img src={soups} alt="soups" />
            <p>Soups</p>
            <span>4 Restaurants</span>
          </div>
          <div className={styles.categoryInfo}></div>
        </div>
      </div>
    </>
  );
}

export default Category;
