import axios from "axios";

export const AddCategoryApi = async (categoryData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/category`,
      categoryData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
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
      `http://localhost:3000/api/v1/category/${id}`,
      categoryData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
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
      `http://localhost:3000/api/v1/category/${id}`,
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
      `http://localhost:3000/api/v1/category`,
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
      `http://localhost:3000/api/v1/category/${id}`,
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
      `http://localhost:3000/api/v1/category/${categoryId}/status`,
      { status },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating category status:", error);
    throw error;
  }
};
