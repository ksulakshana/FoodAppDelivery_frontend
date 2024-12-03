import React from "react";
import styles from "./RestaurantFoodItems.module.css";
import burger from "../assets/burger.png";
import addtoCart from "../assets/addtocart.png";
import ContactInfo from "./ContactInfo";
import shareLink from "../assets/shareLink.png";

function RestaurantFoodItems() {
  return (
    <>
      <div className={styles.offernav}>
        <p className={styles.offerheading}>
          All Offers from McDonald’s East London
        </p>
        <input type="text" name="search" placeholder="Search from menu..." />
      </div>
      <ul className={styles.categoryMenu}>
        <li>Offers</li>
        <li>Burgers</li>
        <li>Fries</li>
        <li>Snacks</li>
        <li>Salads</li>
        <li>Cold drinks</li>
        <li>Happy Meal®</li>
        <li>Desserts</li>
        <li>Hot drinks</li>
        <li>Sauces</li>
        <li>Orbit®</li>
      </ul>

      <div className={styles.showCartOnClick}>
        <div className={styles.showCartLeftDiv}>
          <div className={styles.offerProducts}>
            <img
              src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197327/firstOrderDiscount_cyuwnp.png"
              alt="firstOrderDiscount"
            />
            <img
              src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733160848/veganDiscount_bmhyd0.png"
              alt="veganDiscount"
            />
            <img
              src="https://res.cloudinary.com/dkc3wexlc/image/upload/v1733197325/freeIceCream_o3iu99.png"
              alt="freeIceCream"
            />
          </div>
          <div className={styles.typeAndFood}>
            <p className={styles.type}>Burgers</p>
            <div className={styles.foods}>
              <div className={styles.foodInfo}>
                <div className={styles.foodDescription}>
                  <p className={styles.itemName}>
                    Royal Cheese Burger with extra Fries
                  </p>
                  <p className={styles.itemContent}>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className={styles.itemprice}>₹ 120</p>
                </div>
                <div className={styles.foodImage}>
                  <img src={burger} alt="burger" />
                  <div className={styles.addtoCartbg}>
                    <img src={addtoCart} />
                  </div>
                </div>
              </div>
              <div className={styles.foodInfo}>
                <div className={styles.foodDescription}>
                  <p className={styles.itemName}>
                    Royal Cheese Burger with extra Fries
                  </p>
                  <p className={styles.itemContent}>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className={styles.itemprice}>₹ 120</p>
                </div>
                <div className={styles.foodImage}>
                  <img src={burger} alt="burger" />
                  <div className={styles.addtoCartbg}>
                    <img src={addtoCart} />
                  </div>
                </div>
              </div>
              <div className={styles.foodInfo}>
                <div className={styles.foodDescription}>
                  <p className={styles.itemName}>
                    Royal Cheese Burger with extra Fries
                  </p>
                  <p className={styles.itemContent}>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className={styles.itemprice}>₹ 120</p>
                </div>
                <div className={styles.foodImage}>
                  <img src={burger} alt="burger" />
                  <div className={styles.addtoCartbg}>
                    <img src={addtoCart} />
                  </div>
                </div>
              </div>
              <div className={styles.foodInfo}>
                <div className={styles.foodDescription}>
                  <p className={styles.itemName}>
                    Royal Cheese Burger with extra Fries
                  </p>
                  <p className={styles.itemContent}>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className={styles.itemprice}>₹ 120</p>
                </div>
                <div className={styles.foodImage}>
                  <img src={burger} alt="burger" />
                  <div className={styles.addtoCartbg}>
                    <img src={addtoCart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.restaurantOpTime}>
        <ContactInfo />
      </div>
    </>
  );
}

export default RestaurantFoodItems;
