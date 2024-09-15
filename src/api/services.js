import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const AddServiceApi = async (serviceData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/service`,
      serviceData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding the service", error);
    throw error;
  }
};

export const GetAllServices = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/service`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving services", error);
    throw error;
  }
};

export const DeleteServiceById = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/service/${id}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the service:', error);
    throw error;
  }
};

export const UpdateServiceById = async (id, updatedData) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/service/${id}`,
      updatedData,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('There was an error updating the service:', error);
    throw error;
  }
};

export const GetServiceById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/service/${id}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('There was an error retrieving the service:', error);
    throw error;
  }
};

export const UpdateServiceStatus = async (serviceId, status) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/v1/service/${serviceId}/status`,
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating service status:', error);
    throw error;
  }
};
