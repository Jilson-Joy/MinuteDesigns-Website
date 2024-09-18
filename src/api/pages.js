import axios from "axios";
import config from '../config'; 

const { API_BASE_URL } = config; 
export const AddPageApi = async (pageData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/page`, 
      pageData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error adding the page", error);
    throw error;
  }
};

export const GetAllPages = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/page`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error fetching all pages", error);
    throw error;
  }
};

export const DeletePageById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/page/${id}`,
      { withCredentials: true } 
    );
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the page:', error);
    throw error;
  }
};

export const UpdatePageById = async (id, updatedData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/page/${id}`,
      updatedData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('There was an error updating the page:', error);
    throw error;
  }
};

export const GetPageById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/page/${id}`,
      { withCredentials: true } 
    );
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the page:', error);
    throw error;
  }
};

export const UpdatePageStatus = async (pageId, status) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/page/${pageId}/status`,
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating page status:', error);
    throw error;
  }
};
