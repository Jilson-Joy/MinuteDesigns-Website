import axios from "axios";
import config from '../config';

const { API_BASE_URL } = config;

export const AddBlogApi = async (blogData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/blog`, 
      blogData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding the blog", error);
    throw error;
  }
};

export const UpdateBlogById = async (id, blogData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/blog/${id}`,
      blogData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in updating the blog", error);
    throw error;
  }
};

export const GetBlogById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/blog/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in fetching the blog", error);
    throw error;
  }
};

export const GetAllBlogs = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/blog`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in fetching blogs", error);
    throw error;
  }
};

export const DeleteBlogById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/blog/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in deleting the blog", error);
    throw error;
  }
};

export const UpdateBlogStatus = async (blogId, status) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/blog/${blogId}/status`, 
      { status },

      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating blog status:", error);
    throw error;
  }
};