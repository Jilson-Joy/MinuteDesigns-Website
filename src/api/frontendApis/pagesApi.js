import axios from "axios";
import config from "../../config";

const { API_BASE_URL } = config;

// home page services
export const listAllServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/service`);
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving services", error);
    throw error;
  }
};

export const listAlltestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonial/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};
