import axios from "axios";
import { handleApiResponse, addTokenToHeader } from "../helper";

export const fetchRestaurants = async () => {
  const headers = addTokenToHeader({ headers: {} });
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/restaurants/`,
    { headers }
  );
  if (res.status === 401) {
    localStorage.removeItem("token");
    alert("You're logged out");
    window.location.href = "/login";
  }
  return res;
};

export const fetchOneRestaurant = async (id) => {
  const headers = addTokenToHeader({ headers: {} });
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/restaurants/${id}`,
    {
      headers,
    }
  );
  return res;
};
