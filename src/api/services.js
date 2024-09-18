import axios from "axios";
import config from '../config';

const { API_BASE_URL } = config; 

export const AddServiceApi = async (serviceData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/service`, 
      serviceData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
      `${API_BASE_URL}/service`, 
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
      `${API_BASE_URL}/service/${id}`, 
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
      `${API_BASE_URL}/service/${id}`,
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
    console.error('There was an error updating the service:', error);
    throw error;
  }
};

export const GetServiceById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/service/${id}`,
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
      `${API_BASE_URL}/service/${serviceId}/status`, 
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating service status:', error);
    throw error;
  }
};
