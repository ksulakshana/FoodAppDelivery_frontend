import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
  });

  const errorMessages = {
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
    let isError = false;
    e.preventDefault();
    Object.keys(errorMessages).forEach((key) => {
      if (!errorMessages[key].isValid) {
        isError = true;
        errorMessages[key].onError();
      }
    });

    if (!isError) {
      try {
        const res = await login(formData);
        if (res.status === 200) {
          alert("Logged in successfully");
          const token = res.data.token;
          localStorage.setItem("token", token);
          navigate("/home");
        } else {
          alert("Something went wrong");
        }
      } catch (e) {
        if (e.response.status === 400) {
          alert("Invalid email or password");
        }
        if (e.response.status === 401) {
          alert("Invalid email or password");
        }
      }
    }
  };

  return (
    <form method="POST" className={styles.loginFormContainer}>
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
        <p className={styles.errorMessage}>{errorMessages["email"].message}</p>
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

      <Link to="/register">Forgot Password?</Link>
      <button className={styles.loginButton} type="submit" onClick={onSubmit}>
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
