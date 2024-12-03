import axios from "axios";
import { handleApiResponse, addTokenToHeader } from "../helper";

export const fetchFoodItems = async () => {
  const headers = addTokenToHeader({ headers: {} });
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/foodItems/`,
    { headers }
  );
  if (res.status === 401) {
    localStorage.removeItem("token");
    alert("You're logged out");
    window.location.href = "/login";
  }
  return res;
};

export const fetchOneFoodItem = async () => {
  const headers = addTokenToHeader({ headers: {} });
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/foodItems/${id}`,
    data,
    {
      headers,
    }
  );
  return res;
};
