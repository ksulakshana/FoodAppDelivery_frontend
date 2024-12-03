import React, { useRef, useEffect } from "react";
import styles from "./NewAddress.module.css";
import locationIcon from "../assets/locationIcon.png";

function NewAddress({ openModal, closeModal }) {
  let modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", checkClickOutside);
  });
  function checkClickOutside(e) {
    if (
      { openModal } &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      closeModal(false);
    }
  }
  return (
    <div className={styles.newAddressContainer}>
      <form className={styles.modalContainer} ref={modalRef} method="POST">
        <div className={styles.addressHeading}>
          <img src={locationIcon} />
          <p>Add Address</p>
        </div>

        <div className={styles.formfields}>
          <div className={styles.fieldFirstLine}>
            <div className={styles.selectState}>
              <select>
                <option value="">State</option>
                <option>Uttar Pradesh</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="City/District" />
            </div>
            <div>
              <input type="text" placeholder="Pin Code" />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className={styles.fieldSecondLine}>
            <textarea placeholder="Enter full address" rows="5" />
          </div>
        </div>

        <div className={styles.addressSave}>
          <button className={styles.saveBtn}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default NewAddress;
