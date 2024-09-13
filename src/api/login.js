import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

export const loginApi = async (email, password) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/v1/auth/login`,
            { email, password }, 
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        console.error("There was an error logging in!", error);
        throw error;
    }
};