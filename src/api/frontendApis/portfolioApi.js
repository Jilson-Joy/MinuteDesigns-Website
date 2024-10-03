import axios from "axios";
import config from '../../config';

const { API_BASE_URL } = config; 



export const GetAllPortfolios = async () => { 
    try {
      const response = await axios.get(
        `${API_BASE_URL}/portfolio`, 
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error in retrieving portfolios", error);
      throw error;
    }
  };