import React from "react";
import { useState } from "react";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const errorMessages = {
    name: {
      message: "Name is required",
      isValid: formData.name.length > 0,
      onError: () => {
        setError((error) => ({ ...error, name: true }));
      },
    },
    phone: {
      message: "Provide valid phone number",
      isValid: formData.phone.length > 9,
      onError: () => {
        setError((error) => ({ ...error, phone: true }));
      },
    },
    email: {
      message: "Email is required or User Exists",
      isValid: formData.email.length > 0,
      onError: () => {
        setError((error) => ({ ...error, email: true }));
      },
    },
    password: {
      message: "Password is required",
      isValid: formData.password.length > 0,
      onError: () => {
        setError((error) => ({ ...error, password: true }));
      },
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let isError = false;

    Object.keys(errorMessages).forEach((key) => {
      console.log(key);
      if (!errorMessages[key].isValid) {
        isError = true;
        errorMessages[key].onError();
        console.log(errorMessages[key]);
        console.log(formData.phone.length);
      }
    });
    console.log("out" + isError);
    if (!isError) {
      console.log("in" + isError);

      const res = await register(formData);

      if (res.status === 201) {
        alert("Registered successfully");
        navigate("/login");
      } else if (res.data.message === "User Exists") {
        alert("User Exists");
        errorMessages["email"].onError();
      } else {
        alert(res.data.message);
      }
    }
  };

  return (
    <>
      <form method="POST" className={styles.registerFormContainer}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="eg. John A"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        {error["name"] ? (
          <p className={styles.errorMessage}>{errorMessages["name"].message}</p>
        ) : null}

        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="number"
          placeholder="Enter your 10 digit mobile number"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
        {error["phone"] ? (
          <p className={styles.errorMessage}>
            {errorMessages["phone"].message}
          </p>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Example@email.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        {error["email"] ? (
          <p className={styles.errorMessage}>
            {errorMessages["email"].message}
          </p>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="At least 8 characters"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        {error["password"] ? (
          <p className={styles.errorMessage}>
            {errorMessages["password"].message}
          </p>
        ) : null}

        <button className={styles.loginButton} type="submit" onClick={onSubmit}>
          Continue
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
