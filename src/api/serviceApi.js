// routing

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import ProductList from "./ProductList";
// import ProductDetail from "./ProductDetail";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// ...................................
// API
// .....................
// import axios from "axios";

// const API_URL = "https://fakestoreapi.com/products";

// export const getServices = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };

// export const getServiceById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching product details:", error);
//     throw error;
//   }
// };

// ....................
// // product detail
// ...................
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../src/services/productService"; // Import the service

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProductDetail = async () => {
//       try {
//         const data = await getProductById(id);
//         setProduct(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProductDetail();
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img
//         src={product.image}
//         alt={product.title}
//         style={{ width: "200px", height: "200px" }}
//       />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <p>Category: {product.category}</p>
//     </div>
//   );
// };

// export default ProductDetail;

// ...........................
// ProductList
// .........................
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getProducts } from "../src/services/productService"; // Import the service

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getProducts();
//         setProducts(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               margin: "20px",
//               border: "1px solid #ccc",
//               padding: "20px",
//               width: "200px",
//             }}
//           >
//             <h3>{product.title}</h3>
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: "100px", height: "100px" }}
//             />
//             <p>${product.price}</p>
//             <Link to={`/product/${product.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
