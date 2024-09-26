import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetWebsiteSettingsById, UpdateWebsiteSettingsId } from "../../../api/websiteSettings";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";

const EditWebsiteSettings = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    const fetchWebsiteSettings = async () => {
      try {
        const result = await GetWebsiteSettingsById(id);
        // Ensure socialMedia and menuLinks are arrays
        setFormData({
          ...result,
          socialMedia: Array.isArray(result.socialMedia) ? result.socialMedia : [],
          menuLinks: Array.isArray(result.menuLinks) ? result.menuLinks : [],
        });
      } catch (error) {
        toast.error("Failed to load website settings");
        console.error("Failed to load website settings:", error);
      }
    };

    fetchWebsiteSettings();
  }, [id]);

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
      await UpdateWebsiteSettingsId(id, formDataToSend);
      toast.success("Website settings updated successfully!");
      navigate("/mainDashboard/listWebsiteSettings");
    } catch (error) {
      toast.error("Failed to update website settings");
      console.error("Failed to update website settings:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Edit Website Settings</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/mainDashboard">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/mainDashboard/listWebsiteSettings">Website Settings List</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Website Settings
          </li>
        </ol>
      </nav>
      <div className="d-flex mb-3">
        <button
          onClick={() => navigate("/mainDashboard/listWebsiteSettings")}
          className="btn btn-dark"
        >
          <FaArrowLeft className="me-2" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
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

        {/* Other Input Fields */}
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
        </div>

        {/* Social Media Section */}
        <div className="mb-4">
          <h5>Social Media Links</h5>
          {formData.socialMedia.map((social, index) => (
            <div key={index} className="row mb-2">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={social.name}
                  onChange={(e) => handleSocialMediaChange(index, e)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="icon"
                  placeholder="Icon"
                  value={social.icon}
                  onChange={(e) => handleSocialMediaChange(index, e)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  placeholder="Link"
                  value={social.link}
                  onChange={(e) => handleSocialMediaChange(index, e)}
                />
              </div>
              <div className="col-md-12 mt-2">
                <button type="button" className="btn btn-danger" onClick={() => removeSocialMedia(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={addSocialMedia}>
            Add Social Media
          </button>
        </div>

        {/* Menu Links Section */}
        <div className="mb-4">
          <h5>Menu Links</h5>
          {formData.menuLinks.map((link, index) => (
            <div key={index} className="row mb-2">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Link Name"
                  value={link.name}
                  onChange={(e) => handleMenuLinkChange(index, e)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="menuType"
                  placeholder="Menu Type"
                  value={link.menuType}
                  onChange={(e) => handleMenuLinkChange(index, e)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  placeholder="URL"
                  value={link.link}
                  onChange={(e) => handleMenuLinkChange(index, e)}
                />
              </div>
              <div className="col-md-12 mt-2">
                <button type="button" className="btn btn-danger" onClick={() => removeMenuLink(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={addMenuLink}>
            Add Menu Link
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          Update Website Settings
        </button>
      </form>
    </div>
  );
};

export default EditWebsiteSettings;
