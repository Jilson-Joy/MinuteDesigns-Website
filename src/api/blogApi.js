import axios from "axios";

export const blogApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching blogApi", error);
  }
};


// for the page

// import { blogApi } from "./api/blogApi";

//   const [blog, setBlog] = useState([]);

//     useEffect(() => {
//       const fetchBlog = async () => {
//         try {
//           const response = await blogApi();
//           setBlog(response);
//         } catch (error) {
//           console.error("Failed to load blog:", error);
//         }
//       };
//       fetchBlog();
//     }, []);