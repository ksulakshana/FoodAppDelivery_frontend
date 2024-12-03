import axios from "axios";
import { addTokenToHeader, handleApiResponse } from "../helper";

export const createAddress = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/v1/address`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return handleApiResponse(res);
};

export const updateAddress = async (data, id) => {
  const headers = addTokenToHeader({ headers: {} });

  const res = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/api/v1/address/${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        headers,
      },
    }
  );
  return res;
};

export const deleteAddress = async (data, id) => {
  const headers = addTokenToHeader({ headers: {} });

  const res = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/api/v1/address/${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        headers,
      },
    }
  );
  return res;
};

export const getAllAddress = async () => {
  const headers = addTokenToHeader({ headers: {} });
  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
  }
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/address`,
    {
      headers,
    }
  );

  return res;
};

export const getDefaultAddress = async (id) => {
  const headers = addTokenToHeader({ headers: {} });
  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
  }
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/address/${id}`,
    {
      headers,
    }
  );

  return res;
};
