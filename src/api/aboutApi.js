import axios from "axios";

export const aboutApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching aboutApi", error);
  }
};


// page
// import { aboutApi } from "./api/aboutApi";

// const [about, setAbout] = useState([]);

// useEffect(() => {
//   const fetchAbout = async () => {
//     try {
//       const response = await aboutApi();
//       setAbout(response);
//     } catch (error) {
//       console.error("Failed to load About:", error);
//     }
//   };
//   fetchAbout();
// }, []);