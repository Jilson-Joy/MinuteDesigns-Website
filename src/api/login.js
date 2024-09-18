import axios from "axios";

import config from "../config";

const { API_BASE_URL } = config;
export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error logging in!", error);
    throw error;
  }
};
