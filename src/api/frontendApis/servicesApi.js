import axios from "axios";
import config from '../../config';

const { API_BASE_URL } = config; 


export const listAllActiveServices = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/service`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving services", error);
    throw error;
  }
};

export const getServiceByUrl = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/service/${id}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('There was an error retrieving the service:', error);
    throw error;
  }
};