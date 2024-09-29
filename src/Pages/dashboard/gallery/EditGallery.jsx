import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetGalleryById, EditGalleryApi } from "../../../api/gallery";
import { GetAllCategories } from "../../../api/category";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";

const EditGallery = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    categoryName: "",
    type: "",
    videoUrl: "",
  });
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const result = await GetGalleryById(id);
        if (result.success) {
          setFormData({
            categoryName: result.gallery.categoryName,
            type: result.gallery.type,
            videoUrl: result.gallery.videoUrl,
          });
        } else {
          toast.error("Failed to load gallery data.");
        }
      } catch (error) {
        console.error("Error fetching gallery details:", error);
        toast.error("Failed to load gallery.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const result = await GetAllCategories();
        if (result.success) {
          setCategories(result.categories);
        } else {
          toast.error("Failed to load categories.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories.");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchGallery();
    fetchCategories();
  }, [id]);

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
      await EditGalleryApi(id, formDataToSend);
      toast.success("Gallery updated successfully!");
      navigate("/mainDashboard/listGallery");
    } catch (error) {
      toast.error("Failed to update gallery.");
      console.error("Error updating gallery:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Edit Gallery</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/mainDashboard">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/mainDashboard/listGallery">Gallery List</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Gallery
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
                />
              </div>
            </div>
          </div>
        )}

        <div className="col-row d-flex mt-5">
          <div className="col-md-4 m-2">
            <button type="submit" className="btn btn-dark mr-1">
              Update
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

      <ToastContainer />
    </div>
  );
};

export default EditGallery;