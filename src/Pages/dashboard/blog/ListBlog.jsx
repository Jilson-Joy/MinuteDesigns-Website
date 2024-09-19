import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteBlogById, GetAllBlogs, UpdateBlogStatus } from '../../../api/blog';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function ListBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const result = await GetAllBlogs();
      setBlogs(result.blogs);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleEdit = (blogId) => {
    navigate(`/mainDashboard/edit-blog/${blogId}`); 
  };

  const handleStatusChange = async (blogId) => {
    const blogToUpdate = blogs.find(blog => blog._id === blogId);
  
    if (!blogToUpdate) {
      console.error('Blog not found');
      return;
    }
  
    const newStatus = !blogToUpdate.status;
    const action = newStatus ? 'activate' : 'deactivate';
    const confirmed = window.confirm(`Are you sure you want to ${action} this blog? This action cannot be undone.`);
  
    if (confirmed) {
      try {
        await UpdateBlogStatus(blogId, newStatus);
  
        const updatedBlogs = blogs.map(blog => 
          blog._id === blogId ? { ...blog, status: newStatus } : blog
        );
        setBlogs(updatedBlogs); 
        toast.success(`Blog ${action}d successfully!`);
  
      } catch (error) {
        console.error('Error updating blog status:', error);
      }
    }
  };

  const handleDelete = async (blogId) => {
    const confirmed = window.confirm('Are you sure you want to delete this blog? This action cannot be undone.');
    if (confirmed) {
      try {
        await DeleteBlogById(blogId); 
        setBlogs(blogs.filter(blog => blog._id !== blogId)); 
        toast.success('Blog deleted successfully!');
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const handleView = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedBlog(null); 
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Blogs</h1> 
      <div style={{ textAlign: 'right' }}>
        <button
          onClick={() => navigate('/mainDashboard/addBlog')} 
          className="btn btn-success mb-3"
        >
          Add Blog
        </button>
      </div>
      {blogs.length === 0 ? (
        <p>No blogs available.</p> 
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Status</th>
              <th scope="col">View</th> 
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog._id}>
                <td>{index + 1}</td> 
                <td>{blog.title}</td> 
                <td>{blog.description}</td>
                <td>
                  <button 
                    onClick={() => handleEdit(blog._id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(blog._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleStatusChange(blog._id)}
                    className="btn btn-warning"
                  >
                    {blog.status ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleView(blog)} 
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

      {selectedBlog && (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Blog Details</h5> 
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Title</label>
                  <div className="col-sm-9">
                    <p>{selectedBlog.title}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <p>{selectedBlog.description}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Content</label>
                  <div className="col-sm-9">
                    <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Created At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedBlog.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Updated At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedBlog.updatedAt).toLocaleString()}</p>
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

      {showModal && (
        <div className="modal-backdrop fade show" onClick={handleCloseModal}></div> 
      )}
      
      <ToastContainer />
    </div>
  );
}

export default ListBlogs; 