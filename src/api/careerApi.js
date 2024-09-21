import axios from "axios";

export const careerApi = async (postData) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      postData
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to careerApi", error);
    throw error;
  }
};

// for the page

// import { careerApi } from "./api/careerApi";

// const [career, setCareer] = useState([]);

// useEffect(() => {
//   const fetchCareer = async () => {
//     try {
//       const response = await careerApi();
//       setCareer(response);
//     } catch (error) {
//       console.error("Failed to load career:", error);
//     }
//   };
//   fetchCareer();
// }, []);
