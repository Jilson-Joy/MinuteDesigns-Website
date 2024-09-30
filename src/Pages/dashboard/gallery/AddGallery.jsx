import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddGalleryApi, GetAllGalleriesApi } from "../../../api/gallery";
import { GetAllCategories } from "../../../api/category";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";


const AddGallery = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    type: "",
    videoUrl: "",
  });

  const [files, setFiles] = useState([]);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingType, setLoadingType] = useState(true);

  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await GetAllCategories();

        if (result.success) {
          setCategories(result.categories);
        } else {
          toast.error("Failed to load categories.");
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        toast.error("Failed to load categories.");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("categoryName", formData.categoryName);
    formDataToSend.append("type", formData.type);
    formDataToSend.append("videoUrl", formData.videoUrl);

    files.forEach((file) => {
      formDataToSend.append("files", file);
    });

    try {
      await AddGalleryApi(formDataToSend);
      toast.success("Gallery added successfully!");
      navigate("/mainDashboard/listGallery");
      setFormData({
        categoryName: "",
        type: "",
        videoUrl: "",
      });
      setFiles([]);
    } catch (error) {
      toast.error("Failed to add gallery");
      console.error("Failed to add gallery:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add Gallery</h1>
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/mainDashboard">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/mainDashboard/listGallery">Gallery List</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Gallery
              </li>
            </ol>
          </nav>
          
      <div className="d-flex">
          <div className="float-right">
            <button
              onClick={() => navigate("/mainDashboard/listGallery")}
              className="btn btn-dark"
            >
              <FaArrowLeft className="me-2" />
            </button>
          </div>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="col-row d-flex">
          <div className="col-md-12 m-2">
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <select
                className="form-control"
                id="categoryName"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {loadingCategories ? (
                  <option disabled>Loading categories...</option>
                ) : (
                  Array.isArray(categories) &&
                  categories.map((category) => (
                    <option key={category._id} value={category.categoryName}>
                      {category.categoryName}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
        </div>

        <div className="col-row d-flex">
          <div className="col-md-12 m-2">
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <select
                className="form-control"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Photo">Photo</option>
                <option value="Video">Video</option>
              </select>
            </div>
          </div>
        </div>

        {formData.type === "Video" && (
          <div className="col-row d-flex">
            <div className="col-md-12 m-2">
              <div className="mb-3">
                <label htmlFor="videoUrl" className="form-label">
                  Video URL
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="videoUrl"
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
          </div>
        )}

        {formData.type === "Photo" && (
          <div className="col-row d-flex">
            <div className="col-md-12 m-2">
              <div className="mb-3">
                <label htmlFor="fileUpload" className="form-label">
                  Upload File
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          </div>
        )}


        <div className="col-row d-flex mt-5">
          <div className="col-md-4 m-2">
            <button type="submit" className="btn btn-dark mr-1">
              Submit
            </button>
          </div>
          <div className="col-md-4 m-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate("/mainDashboard/listGallery")}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      <Modal show={showSourceModal} onHide={() => setShowSourceModal(false)}>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSourceModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddGallery;
