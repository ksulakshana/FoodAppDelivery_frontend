import axios from "axios";
import { addTokenToHeader, handleApiResponse } from "../helper";

export const register = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/v1/user/register`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(res);
  return handleApiResponse(res);
};

export const login = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/v1/user/login`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return res;
};

export const getUserData = async () => {
  const headers = addTokenToHeader({ headers: {} });
  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
  }
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user`,
      {
        headers,
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
