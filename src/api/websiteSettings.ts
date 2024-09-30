import axios from "axios";
import config from '../config';

const { API_BASE_URL } = config; 

export const AddWebsiteSettingsApi = async (websiteSettingsId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/websiteSettings`,
      websiteSettingsId,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding websiteSettings", error);
    throw error;
  }
};

export const UpdateWebsiteSettingsId = async (id, websiteSettingsData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/websiteSettings/${id}`,
      websiteSettingsData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in updating websiteSettings", error);
    throw error;
  }
};

export const GetWebsiteSettingsById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/websiteSettings/${id}`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving websiteSettings", error);
    throw error;
  }
};

export const GetAllWebsiteSettings = async () => { 
  try {
    const response = await axios.get(
      `${API_BASE_URL}/websiteSettings`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving websiteSettings", error);
    throw error;
  }
};

export const DeleteWebsiteSettingsById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/websiteSettings/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in deleting websiteSettings", error);
    throw error;
  }
};

export const UpdateWebsiteSettingsStatus = async (websiteSettingsId, status) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/websiteSettings/${websiteSettingsId}/status`, 
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating websiteSettings status:', error);
    throw error;
  }
};
