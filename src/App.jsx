import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/commonStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Navbar/Header";
import Footer from "./components/footer/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Gallery from "./Pages/Gallery";
import Careers from "./Pages/Careers";
import ReachUs from "./Pages/ReachUs";
import WebApp from "./Pages/webApplication/WebApp";
// import MobileApplication from "./Pages/mobileApplication/MobileApplication";
import Ecommerce from "./Pages/services/ecommerce/Ecommerce";
import UiUx from "./Pages/services/ui&ux/UiUx";
import CRM from "./Pages/services/CRM/Crm";
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
import ViewTestimonial from "./Pages/dashboard/testimonial/ViewTestimonial";
import EditCategory from "./Pages/dashboard/category/EditCategory";
import AddBlog from "./Pages/dashboard/blog/AddBlog";
import ListBlogs from "./Pages/dashboard/blog/ListBlog";
import EditBlog from "./Pages/dashboard/blog/EditBlog";
import LandingPage from "./Pages/LandingPage";
import Blog from "./Pages/blog/Blog";
import Architecture from "./Pages/architecture/Architecture";
import Rendering3DService from "./Pages/3DRenderingService/Rendering3DService";
import AboutNew from "./Pages/about/AboutNew";
// service
import WebApplication from "./Pages/services/webApp/WebApplication";
import MobileApplication from "./Pages/services/mobileApp/MobileApplication";


import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./PrivateRoute";
import AddGallery from "./Pages/dashboard/gallery/AddGallery";
import ListGallery from "./Pages/dashboard/gallery/ListGallery";
import ListWebsiteSettings from "./Pages/dashboard/websiteSettings/ListWebsiteSettings";
import AddWebsiteSettings from "./Pages/dashboard/websiteSettings/AddWebsiteSettings";
import EditWebsiteSettings from "./Pages/dashboard/websiteSettings/EditWebsiteSettings";
import EditGallery from "./Pages/dashboard/gallery/EditGallery";
import ViewService from "./Pages/dashboard/services/ViewService";
import ViewPage from "./Pages/dashboard/pages/ViewPage";
import ViewBlog from "./Pages/dashboard/blog/ViewBlog";
import ViewWebsiteSettings from "./Pages/dashboard/websiteSettings/ViewWebsiteSettings";
import Architecture3D from "./Pages/services/architecture & 3D/Architecture3D";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/mainDashboard"
            element={
              <PrivateRoute>
                <MainDashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="addPage" element={<Addpage />} />
            <Route path="listPage" element={<ListPages />} />
            <Route path="edit-page/:id" element={<EditPage />} />
            <Route path="addTestimonial" element={<AddTestimonial />} />
            <Route path="listTestimonials" element={<ListTestimonials />} />
            <Route path="edit-testimonial/:id" element={<EditTestimonial />} />
            <Route path="view-testimonial/:testimonialId" element={<ViewTestimonial />} />

            <Route path="addServices" element={<AddServices />} />
            <Route path="listServices" element={<ListServices />} />
            <Route path="edit-service/:id" element={<EditService />} />
            <Route path="service/:serviceId" element={<ViewService />} />
            <Route path="page/:pageId" element={<ViewPage />} />

            <Route path="addCategory" element={<AddCategory />} />
            <Route path="listCategory" element={<ListCategories />} />
            <Route path="edit-category/:id" element={<EditCategory />} />
            <Route path="addBlog" element={<AddBlog />} />
            <Route path="listBlogs" element={<ListBlogs />} />
            <Route path="edit-blog/:id" element={<EditBlog />} />
            <Route path="view-blog/:id" element={<ViewBlog />} />

            <Route path="addGallery" element={<AddGallery />} />
            <Route path="listGallery" element={<ListGallery />} />
            <Route path="edit-Gallery/:id" element={<EditGallery />} />

            <Route path="addWebsiteSettings" element={<AddWebsiteSettings />} />
            <Route
              path="listWebsiteSettings"
              element={<ListWebsiteSettings />}
            />
            <Route
              path="edit-website-settings/:id"
              element={<EditWebsiteSettings />}
            />
            <Route
              path="view-websitesettings/:id"
              element={<ViewWebsiteSettings />}
            />
          </Route>

          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<AboutNew />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/technologies" element={<Careers />} />
                  <Route path="/reachUs" element={<ReachUs />} />
                  {/* service pages */}
                  <Route path="/webapp" element={<WebApplication />} />
                  <Route path="/CRM&ERp" element={<CRM />} />
                  {/* <Route path="/mobileApp" element={<MobileApplication />} /> */}
                  <Route path="/mobileApp" element={<MobileApplication />} />
                  <Route path="/Architecture3D" element={<Architecture3D />} />
                  <Route path="/e-commerce" element={<Ecommerce />} />
                  <Route path="/uiux" element={<UiUx />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/architecture" element={<Architecture />} />
                  <Route
                    path="/3DRenderingService"
                    element={<Rendering3DService />}
                  />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
