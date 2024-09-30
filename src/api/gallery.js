import axios from "axios";
import config from '../config';

const { API_BASE_URL } = config; 

export const AddGalleryApi = async (galleryData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/gallery`,
      galleryData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding gallery", error);
    throw error;
  }
};


export const EditGalleryApi = async (galleryId, galleryData) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/gallery/${galleryId}`,
        galleryData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error in editing the gallery", error);
      throw error;
    }
  };


  
  export const GetAllGalleriesApi = async () => {
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
  
export const UpdateGalleryStatus = async (galleryId, status) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/gallery/${galleryId}/status`,
        { status },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error('Error updating gallery status:', error);
      throw error;
    }
  };

  export const GetGalleryById = async (id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/gallery/${id}`,
        { withCredentials: true } 
      );
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the galleries:', error);
      throw error;
    }
  };export const DeleteGalleryById = async (id) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/gallery/${id}`,
        { withCredentials: true } 
      );
      return response.data;
    } catch (error) {
      console.error('There was an error deleting the gallery:', error);
      throw error;
    }
  };
  