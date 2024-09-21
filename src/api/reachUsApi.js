import axios from "axios";

export const reachUsApi = async (
  firstName,
  lastName,
  email,
  number,
  description
) => {
  // Create the payload object from the function parameters
  const payload = {
    firstName,
    lastName,
    email,
    number,
    description,
  };

  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products", // Replace this URL with your actual API endpoint
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to reachUsApi", error);
    throw error;
  }
};
