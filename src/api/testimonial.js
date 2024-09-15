import axios from "axios";

export const AddTestimonialApi = async (testimonialData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/testimonial`,
      testimonialData,
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


export const UpdateTestimonialById = async (id,testimonialData) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/testimonial/${id}`,
      testimonialData,
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

export const GetTestimonialById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/testimonial/${id}`,
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



export const GetAllTestimonial = async (testimonialData) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/testimonial`,
        testimonialData,
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



  export const UpdateTestimonialStatus = async (testimonialId, status) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/v1/testimonial/${testimonialId}/status`,
        { status },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error('Error updating page status:', error);
      throw error;
    }
  };