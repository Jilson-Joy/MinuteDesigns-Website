import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const AddPageApi = async (pageData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/page`,
      pageData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the content type is set to multipart/form-data
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

export const GetAllPages = async (pageData) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/page`,
      pageData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding page", error);
    throw error;
  }
};


export const DeletePageById = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/page/${id}`,
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
      `http://localhost:3000/api/v1/page/${id}`,updatedData,
      { withCredentials: true } 
    );
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the page:', error);
    throw error;
  }
};


export const GetPageById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/page/${id}`,
      { withCredentials: true } 
    );
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the page:', error);
    throw error;
  }
};


export const UpdatePageStatus = async (pageId, status) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/v1/page/${pageId}/status`,
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating page status:', error);
    throw error;
  }
};


