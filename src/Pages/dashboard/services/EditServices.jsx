import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GetServiceById, UpdateServiceById } from "../../../api/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceUrl: "",
    serviceTitle: "",
    name: "",
    shortDescription: "",
    description: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    metaAuthor: "",
    metaKeywords: "",
    metaTags: "",
    status: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const result = await GetServiceById(id);
        const serviceData = result.service;

        setFormData({
          serviceUrl: serviceData.serviceUrl || "",
          serviceTitle: serviceData.serviceTitle || "",
          name: serviceData.name || "",
          shortDescription: serviceData.shortDescription || "",
          description: serviceData.description || "",
          content: serviceData.content || "",
          metaTitle: serviceData.metaTitle || "",
          metaDescription: serviceData.metaDescription || "",
          metaAuthor: serviceData.metaAuthor || "",
          metaKeywords: serviceData.metaKeywords || "",
          metaTags: serviceData.metaTags || "",
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching service data:", error);
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await UpdateServiceById(id, formData);
      console.log("Service updated successfully:", result);

      toast.success("Service updated successfully!");

      navigate("/mainDashboard/listServices");
    } catch (error) {
      console.error("Failed to update service:", error);

      toast.error("Failed to update service. Please try again.");
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      ["link"],
      ["clean"],
      ["code-block"],
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">Edit Service</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="serviceUrl" className="col-sm-2 col-form-label">
            Service URL
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="serviceUrl"
              name="serviceUrl"
              value={formData.serviceUrl}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="serviceTitle" className="col-sm-2 col-form-label">
            Service Title
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="serviceTitle"
              name="serviceTitle"
              value={formData.serviceTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="shortDescription" className="col-sm-2 col-form-label">
            Short Description
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="shortDescription"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaTitle" className="col-sm-2 col-form-label">
            Meta Title
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaTitle"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaDescription" className="col-sm-2 col-form-label">
            Meta Description
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaDescription"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaAuthor" className="col-sm-2 col-form-label">
            Meta Author
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaAuthor"
              name="metaAuthor"
              value={formData.metaAuthor}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaKeywords" className="col-sm-2 col-form-label">
            Meta Keywords (comma separated)
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaKeywords"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaTags" className="col-sm-2 col-form-label">
            Meta Tags (comma separated)
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaTags"
              name="metaTags"
              value={formData.metaTags}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="content" className="col-sm-2 col-form-label">
            Content
          </label>
          <div className="col-sm-10">
            <ReactQuill
              style={{ marginLeft: "80px", width: "200%", height: "150%" }}
              value={formData.content}
              onChange={handleContentChange}
              modules={modules}
              placeholder="Write your content here..."
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-0">
            <button type="submit" className="btn btn-primary">
              Update Service
            </button>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EditService;
