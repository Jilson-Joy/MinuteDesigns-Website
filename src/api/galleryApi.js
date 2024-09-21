import axios from "axios";

export const galleryApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching galleryApi", error);
  }
};


// page
// import { galleryApi } from "./api/galleryApi";

// const [gallery, setGallery] = useState([]);

// useEffect(() => {
//   const fetchGallery = async () => {
//     try {
//       const response = await galleryApi();
//       setGallery(response);
//     } catch (error) {
//       console.error("Failed to load gallery:", error);
//     }
//   };
//   fetchGallery();
// }, []);