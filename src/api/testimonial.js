import axios from "axios";
import config from '../config';

const { API_BASE_URL } = config; 

export const AddTestimonialApi = async (testimonialData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/testimonial`,
      testimonialData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding testimonial", error);
    throw error;
  }
};

export const UpdateTestimonialById = async (id, testimonialData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/testimonial/${id}`,
      testimonialData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in updating testimonial", error);
    throw error;
  }
};

export const GetTestimonialById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/testimonial/${id}`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving testimonial", error);
    throw error;
  }
};

export const GetAllTestimonial = async () => { 
  try {
    const response = await axios.get(
      `${API_BASE_URL}/testimonial`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving testimonials", error);
    throw error;
  }
};

export const DeleteTestimonialById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/testimonial/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in deleting testimonial", error);
    throw error;
  }
};

export const UpdateTestimonialStatus = async (testimonialId, status) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/testimonial/${testimonialId}/status`, 
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating testimonial status:', error);
    throw error;
  }
};
