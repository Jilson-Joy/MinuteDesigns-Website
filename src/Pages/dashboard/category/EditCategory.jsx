import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetCategoryById, UpdateCategoryById } from "../../../api/category"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    videoUrl: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const result = await GetCategoryById(id);
        const categoryData = result.category; 

        setFormData({
          categoryName: categoryData.categoryName || "",
          videoUrl: categoryData.videoUrl || "",
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
    } catch (error) {
      console.error("Failed to update category:", error);
      toast.error("Failed to update category. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">Edit Category</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="categoryName" className="col-sm-2 col-form-label">
            Category Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="categoryName"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="videoUrl" className="col-sm-2 col-form-label">
            Video URL
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Update Category
            </button>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EditCategory
