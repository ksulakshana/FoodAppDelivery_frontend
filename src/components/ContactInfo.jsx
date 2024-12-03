import React from "react";
import styles from "./ContactInfo.module.css";
import tracking from "../assets/Tracking.png";
import contact from "../assets/contact.png";
import clock from "../assets/Clock.png";

function ContactInfo() {
  return (
    <>
      <div className={styles.deliveryInfo}>
        <p className={styles.deliveryInfoHeading}>
          <img src={tracking} />
          <span>Delivery information</span>
        </p>
        <div className={styles.deliveryTimings}>
          <p>
            Monday: <span>12:00 AM–3:00 AM, 8:00 AM–3:00AM</span>
          </p>
          <p>
            Tuesday: <span>8:00 AM–3:00 AM</span>
          </p>
          <p>
            Wednesday: <span>8:00 AM–3:00 AM</span>
          </p>
          <p>
            Thursday: <span> 8:00 AM–3:00 AM</span>
          </p>
          <p>
            Friday: <span> 8:00 AM–3:00 AM</span>
          </p>
          <p>
            Saturday: <span> 8:00 AM–3:00 AM</span>
          </p>
          <p>
            Sunday: <span>8:00 AM–12:00 AM</span>
          </p>
          <p>
            Estimated time until delivery: <span>20 min</span>
          </p>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <p className={styles.contactinfoHeading}>
          <img src={contact} />
          <span>Contact information</span>
        </p>
        <div className={styles.contactInfoData}>
          <p>
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>
          <p>
            <span className={styles.phoneHeading}>Phone number</span> <br />
            +934443-43 <br />
            <span className={styles.websiteheading}>Website</span> <br />
            http://mcdonalds.uk/
          </p>
        </div>
      </div>
      <div className={styles.operationalTimes}>
        <p className={styles.operationalTimesHeading}>
          <img src={clock} />
          <span>Operational Times</span>
        </p>
        <div className={styles.operationTimings}>
          <p>
            <span>Monday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Tuesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Wednesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Thursday:</span> 8:00 AM–3:00 AM{" "}
          </p>
          <p>
            <span> Friday:</span> 8:00 AM–3:00 AM{" "}
          </p>
          <p>
            <span>Saturday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Sunday:</span> 8:00 AM–3:00 AM
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
