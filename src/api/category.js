import axios from "axios";
import config from '../config';

const { API_BASE_URL } = config;

export const AddCategoryApi = async (categoryData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/category`, 
      categoryData,
      {
       
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding the category", error);
    throw error;
  }
};

export const UpdateCategoryById = async (id, categoryData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/category/${id}`,
      categoryData,
      {
       
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in updating the category", error);
    throw error;
  }
};

export const GetCategoryById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/category/${id}`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in fetching the category", error);
    throw error;
  }
};

export const GetAllCategories = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/category`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in fetching categories", error);
    throw error;
  }
};

export const DeleteCategoryById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/category/${id}`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in deleting the category", error);
    throw error;
  }
};

export const UpdateCategoryStatus = async (categoryId, status) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/category/${categoryId}/status`, 
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating category status:", error);
    throw error;
  }
};
