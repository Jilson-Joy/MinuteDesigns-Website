import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DeleteCategoryById,
  GetAllCategories,
  UpdateCategoryStatus,
} from "../../../api/category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const result = await GetAllCategories(1, 100);
      setCategories(result.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (categoryId) => {
    navigate(`/mainDashboard/edit-category/${categoryId}`);
  };

  const handleStatusChange = async (categoryId) => {
    const categoryToUpdate = categories.find(
      (category) => category._id === categoryId
    );

    if (!categoryToUpdate) {
      console.error("Category not found");
      return;
    }

    const newStatus = !categoryToUpdate.status;
    const action = newStatus ? "activate" : "deactivate";
    const confirmed = window.confirm(
      `Are you sure you want to ${action} this category? This action cannot be undone.`
    );

    if (confirmed) {
      try {
        await UpdateCategoryStatus(categoryId, newStatus);
        const updatedCategories = categories.map((category) =>
          category._id === categoryId
            ? { ...category, status: newStatus }
            : category
        );
        setCategories(updatedCategories);
        toast.success(`Category ${action}d successfully!`);
      } catch (error) {
        console.error("Error updating category status:", error);
      }
    }
  };

  const handleDelete = async (categoryId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await DeleteCategoryById(categoryId);
        setCategories(
          categories.filter((category) => category._id !== categoryId)
        );
        toast.success("Category deleted successfully!");
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const handleView = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredCategories = categories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = filteredCategories.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">List of Categories</h1>
      </div>
     
      {/* breadcrumb */}
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Category List
            </li>
          </ol>
        </nav>
      </div>

      <div className="row display-flex">
        <div className="mb-3 col-md-6 text-left">
          <button
            onClick={() => navigate("/mainDashboard/addPage")}
            className="btn btn-success"
          >
            Add Category
          </button>
        </div>

        <div className="mb-3 col-md-6 text-right">
          <input
            type="text"
            className="form-control"
            placeholder="Search by category name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th style={{ padding: "25px" }}>#</th>
              <th style={{ padding: "25px" }}>CATEGORY NAME</th>
              <th style={{ padding: "25px" }}>VIDEO URL</th>
              <th style={{ padding: "25px" }}>STATUS</th>
              <th style={{ padding: "25px" }}>ACTIONS</th>
            </tr>
          </thead>
          {filteredCategories.length === 0 ? (
            <tr className="text-muted">
            <td colSpan="8" className="text-center text-muted">
            No categories available.</td>
            </tr>
          ) : (
            <tbody>
              {currentCategories.map((category, index) => (
                <tr key={category._id}>
                  <td>{index + 1 + indexOfFirstItem}</td>
                  <td>{category.categoryName}</td>
                  <td>{category.videoUrl}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(category._id)}
                      className={`btn btn-sm ${
                        category.status ? "btn-warning" : "btn-secondary"
                      }`}
                    >
                      {category.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleEdit(category._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleView(category)}
                        className="btn btn-info btn-sm"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {showModal && selectedCategory && (
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Category Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <strong>Category Name</strong>
                  <div className="col-sm-9">
                    <p>{selectedCategory.categoryName}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <strong>Video URL</strong>
                  <div className="col-sm-9">
                    <p>{selectedCategory.videoUrl}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <strong>Content</strong>
                  <div className="col-sm-9">
                    <p>{selectedCategory.content}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <strong>Created At</strong>
                  <div className="col-sm-9">
                    <p>
                      {new Date(selectedCategory.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <strong>Updated At</strong>
                  <div className="col-sm-9">
                    <p>
                      {new Date(selectedCategory.updatedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={handleCloseModal}
        ></div>
      )}

      <ToastContainer />
    </div>
  );
}

export default ListCategories;
