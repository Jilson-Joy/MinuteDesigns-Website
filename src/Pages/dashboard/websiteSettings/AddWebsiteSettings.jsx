import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddWebsiteSettingsApi } from "../../../api/websiteSettings";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";


const AddWebsiteSettings = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    websiteName: "",
    address: "",
    officePhone: "",
    mobile: "",
    googleMapLink: "",
    numberOfProducts: "",
    numberOfClients: "",
    numberOfEmployees: "",
    email: "",
    socialMedia: [],
    menuLinks: [],
    headerLogo: null,
    footerLogo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };
  

  const handleSocialMediaChange = (index, e) => {
    const { name, value } = e.target;
    const newSocialMedia = [...formData.socialMedia];
    newSocialMedia[index] = {
      ...newSocialMedia[index],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      socialMedia: newSocialMedia,
    }));
  };

  const addSocialMedia = () => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, { name: "", icon: "", link: "", order: "" }],
    }));
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = formData.socialMedia.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      socialMedia: newSocialMedia,
    }));
  };

  const handleMenuLinkChange = (index, e) => {
    const { name, value } = e.target;
    const newMenuLinks = [...formData.menuLinks];
    newMenuLinks[index] = {
      ...newMenuLinks[index],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      menuLinks: newMenuLinks,
    }));
  };

  const addMenuLink = () => {
    setFormData((prev) => ({
      ...prev,
      menuLinks: [...prev.menuLinks, { name: "", menuType: "", link: "", order: "" }],
    }));
  };

  const removeMenuLink = (index) => {
    const newMenuLinks = formData.menuLinks.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      menuLinks: newMenuLinks,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "socialMedia" || key === "menuLinks") {
        formData[key].forEach((item, index) => {
          Object.keys(item).forEach((subKey) => {
            formDataToSend.append(`${key}[${index}][${subKey}]`, item[subKey]);
          });
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      await AddWebsiteSettingsApi(formDataToSend);
      toast.success("Website settings added successfully!");
      navigate("/mainDashboard/listWebsiteSettings");
      resetForm();
    } catch (error) {
      toast.error("Failed to add website settings");
      console.error("Failed to add website settings:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      websiteName: "",
      address: "",
      officePhone: "",
      mobile: "",
      googleMapLink: "",
      numberOfProducts: "",
      numberOfClients: "",
      numberOfEmployees: "",
      email: "",
      socialMedia: [],
      menuLinks: [],
      headerLogo: null,
      footerLogo: null,
    });
  };

  return (
    <div className="container mt-4">
      <h1>Add Website Settings</h1>
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/mainDashboard">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/mainDashboard/listWebsiteSettings">Website Settings List</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Website Settings
              </li>
            </ol>
          </nav>
          <div className="d-flex">
          <div className="float-right">
            <button
              onClick={() => navigate("/mainDashboard/listWebsiteSettings")}
              className="btn btn-dark"
            >
              <FaArrowLeft className="me-2" />
            </button>
          </div>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="websiteName" className="form-label">
              Website Name
            </label>
            <input
              type="text"
              className="form-control"
              id="websiteName"
              name="websiteName"
              value={formData.websiteName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="officePhone" className="form-label">
              Office Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="officePhone"
              name="officePhone"
              value={formData.officePhone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="googleMapLink" className="form-label">
              Google Map Link
            </label>
            <input
              type="text"
              className="form-control"
              id="googleMapLink"
              name="googleMapLink"
              value={formData.googleMapLink}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="numberOfProducts" className="form-label">
              Number of Products
            </label>
            <input
              type="text"
              className="form-control"
              id="numberOfProducts"
              name="numberOfProducts"
              value={formData.numberOfProducts}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="numberOfClients" className="form-label">
              Number of Clients
            </label>
            <input
              type="text"
              className="form-control"
              id="numberOfClients"
              name="numberOfClients"
              value={formData.numberOfClients}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="numberOfEmployees" className="form-label">
              Number of Employees
            </label>
            <input
              type="text"
              className="form-control"
              id="numberOfEmployees"
              name="numberOfEmployees"
              value={formData.numberOfEmployees}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="headerLogo" className="form-label">
              Upload Header Logo
            </label>
            <input
              type="file"
              accept="image/*"
              id="headerLogo"
              name="files"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="footerLogo" className="form-label">
              Upload Footer Logo
            </label>
            <input
              type="file"
              accept="image/*"
              id="footerLogo"
              name="files"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
        </div>

        <h5>Social Media</h5>
        {formData.socialMedia.map((media, index) => (
          <div className="row mb-3" key={index}>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Social Media Name"
                name="name"
                value={media.name}
                onChange={(e) => handleSocialMediaChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Icon URL"
                name="icon"
                value={media.icon}
                onChange={(e) => handleSocialMediaChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Link"
                name="link"
                value={media.link}
                onChange={(e) => handleSocialMediaChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Order"
                name="order"
                value={media.order}
                onChange={(e) => handleSocialMediaChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeSocialMedia(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={addSocialMedia}>
          Add Social Media
        </button>

        <h5>Menu Links</h5>
        {formData.menuLinks.map((link, index) => (
          <div className="row mb-3" key={index}>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Menu Link Name"
                name="name"
                value={link.name}
                onChange={(e) => handleMenuLinkChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Menu Type"
                name="menuType"
                value={link.menuType}
                onChange={(e) => handleMenuLinkChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Link"
                name="link"
                value={link.link}
                onChange={(e) => handleMenuLinkChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Order"
                name="order"
                value={link.order}
                onChange={(e) => handleMenuLinkChange(index, e)}
                className="form-control mb-2"
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeMenuLink(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={addMenuLink}>
          Add Menu Link
        </button>

        <div className="row mt-2">
              <div className="col-md-6 text-center mb-2 mb-md-0">
                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </div>

              <div className="col-md-6 text-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                  onClick={() => navigate("/mainDashboard/listWebsiteSettings")}
                >
                  Cancel
                </button>
              </div>
            </div>
        
      </form>
    </div>
  );
};

export default AddWebsiteSettings;
