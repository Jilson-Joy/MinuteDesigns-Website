import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar/Header";
import "./assets/css/commonStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Work from "./Pages/Work";
import Gallery from "./Pages/Gallery";
import Careers from "./Pages/Careers";
import ReachUs from "./Pages/ReachUs";
import Footer from "./components/footer/Footer";
import WebApp from "./Pages/webApplication/WebApp";
import MobileApplication from "./Pages/mobileApplication/MobileApplication";
import Ecommerce from "./Pages/ecommerce/Ecommerce";
import UiUx from "./Pages/ui&ux/UiUx";
import Home1 from "./Pages/Home1";
import Portfolio from "./Pages/portfolio/Portfolio";
import LogIn from "./Pages/login/Login";
import MainDashboard from "./Pages/dashboard/MainDashboard";
import Dashboard from "./Pages/dashboard/Dashboard";
import Addpage from "./Pages/dashboard/pages/Addpage";
import ListPages from "./Pages/dashboard/pages/ListPages";
import EditPage from "./Pages/dashboard/pages/EditPage";
import AddTestimonial from "./Pages/dashboard/testimonial/AddTestimonial";
import ListTestimonials from "./Pages/dashboard/testimonial/ListTestimonial";
import EditTestimonial from "./Pages/dashboard/testimonial/EditTestimonial";
import AddServices from "./Pages/dashboard/services/AddServices";
import ListServices from "./Pages/dashboard/services/ListServices";
import EditService from "./Pages/dashboard/services/EditServices";
import AddCategory from "./Pages/dashboard/category/AddCategory";
import ListCategories from "./Pages/dashboard/category/ListCategory";
import EditCategory from "./Pages/dashboard/category/EditCategory";
import AddBlog from "./Pages/dashboard/blog/AddBlog";
import ListBlogs from "./Pages/dashboard/blog/ListBlog";
import EditBlog from "./Pages/dashboard/blog/EditBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/mainDashboard" element={<MainDashboard />}>
          <Route index element={<Dashboard />} />

          <Route path="addPage" element={<Addpage />} />
          <Route path="listPage" element={<ListPages />} />
          <Route path="edit-page/:id" element={<EditPage />} />
          <Route path="addTestimonial" element={<AddTestimonial />} />
          <Route path="listTestimonials" element={<ListTestimonials />} />
          <Route path="edit-testimonial/:id" element={<EditTestimonial />} />
          <Route path="addServices" element={<AddServices />} />
          <Route path="listServices" element={<ListServices />} />
          <Route path="edit-service/:id" element={<EditService />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="listCategory" element={<ListCategories />} />
          <Route path="edit-category/:id" element={<EditCategory />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlogs" element={<ListBlogs />} />
          <Route path="edit-blog/:id" element={<EditBlog />} />
        </Route>

        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/technologies" element={<Careers />} />
                <Route path="/reachUs" element={<ReachUs />} />
                <Route path="/webapp" element={<WebApp />} />
                <Route path="/mobileApp" element={<MobileApplication />} />
                <Route path="/e-commerce" element={<Ecommerce />} />
                <Route path="/uiux" element={<UiUx />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
