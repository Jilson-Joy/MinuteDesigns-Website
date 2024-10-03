import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCategoryApi } from "../../../api/category";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const AddCategory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
  });

  const [showSourceModal, setShowSourceModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await AddCategoryApi(formData);
      if (result.success === false) {
        toast.error(result.message || "Failed to add category");
      } else {
        toast.success("Category added successfully!");
        setTimeout(() => {
          navigate("/mainDashboard/listCategory");
        }, 1000)

      setFormData({
        categoryName: "",
      });
    }} catch (error) {
      toast.error("Error adding category.");
    }
  };

  return (
    <div className="container">
      <h1>Add Category</h1>{" "}
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/mainDashboard/listCategory">Category List</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Category
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex">
        <div className="float-right">
          <button
            onClick={() => navigate("/mainDashboard/listCategory")}
            className="btn btn-dark"
          >
            <FaArrowLeft className="me-2" />
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="col-row d-flex ">
          <div className="col-md-12 m-2">
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <input
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
        </div>
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
        <Modal.Header closeButton></Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSourceModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />

    </div>
  );
};

export default AddCategory;
