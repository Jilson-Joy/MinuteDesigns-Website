import axios from "axios";

export const AddTestimonialApi = async (pageData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/testimonial`,
      pageData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding testimonial", error);
    throw error;
  }
};


export const GetAllTestimonial = async (pageData) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/testimonial`,
        pageData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error in adding testimonial", error);
      throw error;
    }
  };


export const DeleteTestimonialById = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/testimonial/${id}`,
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

