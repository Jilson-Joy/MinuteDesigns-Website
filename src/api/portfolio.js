import axios from "axios";
import config from '../config';

const { API_BASE_URL } = config; 

export const AddPortfolioApi = async (portfolioData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/portfolio`,
      portfolioData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in adding portfolio", error);
    throw error;
  }
};

export const UpdatePortfolioById = async (id, portfolioData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/portfolio/${id}`,
      portfolioData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in updating portfolio", error);
    throw error;
  }
};

export const GetPortfolioById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/portfolio/${id}`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving portfolio", error);
    throw error;
  }
};

export const GetAllPortfolios = async () => { 
  try {
    const response = await axios.get(
      `${API_BASE_URL}/portfolio`, 
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in retrieving portfolios", error);
    throw error;
  }
};

export const DeletePortfolioById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/portfolio/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error in deleting portfolio", error);
    throw error;
  }
};

export const UpdatePortfolioStatus = async (portfolioId, status) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/portfolio/${portfolioId}/status`, 
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating portfolio status:', error);
    throw error;
  }
};
