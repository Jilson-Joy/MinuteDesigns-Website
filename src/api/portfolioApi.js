import axios from "axios";

export const portfolioApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolioApi", error);
  }
};

// page
// import { portfolioApi } from "./api/portfolioApi";

// const [portfolio, setPortfolio] = useState([]);

// useEffect(() => {
//   const fetchPortfolio = async () => {
//     try {
//       const response = await portfolioApi();
//       setPortfolio(response);
//     } catch (error) {
//       console.error("Failed to load Portfolio:", error);
//     }
//   };
//   fetchPortfolio();
// }, []);