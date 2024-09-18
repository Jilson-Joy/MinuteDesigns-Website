import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCategoryApi } from "../../../api/category";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AddCategory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    videoUrl: "",
    description: "",
  });

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files)); // Store the files
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    files.forEach((file) => {
      formDataToSend.append("files", file); // Append each file
    });

    formDataToSend.append("categoryName", formData.categoryName);
    formDataToSend.append("videoUrl", formData.videoUrl);

    try {
      await AddCategoryApi(formDataToSend); // Use formDataToSend with files
      toast.success("Category added successfully!");
      navigate("/mainDashboard/listCategory");

      setFormData({
        categoryName: "",
        videoUrl: "",
      });
      setFiles([]); // Reset the file input
    } catch (error) {
      console.error("Failed to add category:", error);
      toast.error("Error adding category.");
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Add Category</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="categoryName" className="col-sm-2 col-form-label">
            Category Name
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="categoryName"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="videoUrl" className="col-sm-2 col-form-label">
            Video URL
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="url"
              className="form-control"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="https://example.com/video"
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="fileUpload">Upload File</label>
          <input
            type="file"
            className="form-control"
            name="files"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="row mb-3">
          <div className="col-sm-8 offset-sm-2">
            <button
              type="submit"
              style={{ marginLeft: "-20%" }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
