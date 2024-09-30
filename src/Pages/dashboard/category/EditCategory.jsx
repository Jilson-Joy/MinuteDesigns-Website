import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetCategoryById, UpdateCategoryById } from "../../../api/category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
  });

  const [loading, setLoading] = useState(true);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const result = await GetCategoryById(id);
        const categoryData = result.category;

        setFormData({
          categoryName: categoryData.categoryName || "",
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [id]);

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
      await UpdateCategoryById(id, formData); 
      toast.success("Category updated successfully!");
      navigate("/mainDashboard/listCategory");

      setFormData({
        categoryName: "",
      });
    } catch (error) {
      toast.error("Error updating category.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mt-4">Edit Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-row d-flex mt-5">
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
              onClick={() => navigate("/mainDashboard/listServices")}
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

      <ToastContainer />
    </div>
  );
};

export default EditCategory;