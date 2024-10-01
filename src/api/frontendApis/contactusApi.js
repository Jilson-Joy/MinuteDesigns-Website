import axios from "axios";
import config from "../../config";

const { API_BASE_URL } = config;

// contact us
export const postContact = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contactUs/`, formData);
    return response.data;
  } catch (error) {
    console.error("There was an error sending info", error);
    throw error;
  }
};