import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteCategoryById, GetAllCategories, UpdateCategoryStatus } from '../../../api/category'; // Adjust path as necessary
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const result = await GetAllCategories(1, 10);
      setCategories(result.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
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
    const categoryToUpdate = categories.find(category => category._id === categoryId);
  
    if (!categoryToUpdate) {
      console.error('Category not found');
      return;
    }
  
    const newStatus = !categoryToUpdate.status;
    const action = newStatus ? 'activate' : 'deactivate';
    const confirmed = window.confirm(`Are you sure you want to ${action} this category? This action cannot be undone.`);
  
    if (confirmed) {
      try {
        await UpdateCategoryStatus(categoryId, newStatus);
  
        const updatedCategories = categories.map(category => 
          category._id === categoryId ? { ...category, status: newStatus } : category
        );
        setCategories(updatedCategories); 
        toast.success(`Category ${action}d successfully!`);
  
      } catch (error) {
        console.error('Error updating category status:', error);
      }
    }
  };

  const handleDelete = async (categoryId) => {
    const confirmed = window.confirm('Are you sure you want to delete this category? This action cannot be undone.');
    if (confirmed) {
      try {
        await DeleteCategoryById(categoryId); 
        setCategories(categories.filter(category => category._id !== categoryId)); 
        toast.success('Category deleted successfully!');
      } catch (error) {
        console.error('Error deleting category:', error);
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

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Categories</h1>
      <div style={{ textAlign: 'right' }}>
        <button
          onClick={() => navigate('/mainDashboard/addCategory')} 
          className="btn btn-success mb-3"
        >
          Add Category
        </button>
      </div>
      {categories.length === 0 ? (
        <p>No categories available.</p> 
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Category Name</th>
              <th scope="col">Video Url</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">View</th> 
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td> 
                <td>{category.categoryName}</td> 
                <td>{category.videoUrl}</td> 
                <td>
                  <button 
                    onClick={() => handleStatusChange(category._id)}
                    className="btn btn-warning"
                  >
                    {category.status ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleEdit(category._id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(category._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleView(category)} 
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedCategory && (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Category Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Category Name</label>
                  <div className="col-sm-9">
                    <p>{selectedCategory.categoryName}</p>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <label className="col-sm-3">Video URL</label>
                  <div className="col-sm-9">
                    <p>{selectedCategory.videoUrl}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Created At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedCategory.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Updated At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedCategory.updatedAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>}
      
      <ToastContainer />
    </div>
  );
}

export default ListCategories;
