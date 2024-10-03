
import axios from "axios";
import config from '../../config';

const { API_BASE_URL } = config; 


export const GetAllGalleryImageApi = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/gallery`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("There was an error in fetching galleries", error);
      throw error;
    }
  };
