import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DeleteBlogById,
  GetAllBlogs,
  UpdateBlogStatus,
} from "../../../api/blog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
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
    const blogToUpdate = blogs.find((blog) => blog._id === blogId);

    if (!blogToUpdate) {
      console.error("Blog not found");
      return;
    }

    const newStatus = !blogToUpdate.status;
    const action = newStatus ? "activate" : "deactivate";
    const confirmed = window.confirm(
      `Are you sure you want to ${action} this blog? This action cannot be undone.`
    );

    if (confirmed) {
      try {
        await UpdateBlogStatus(blogId, newStatus);
        const updatedBlogs = blogs.map((blog) =>
          blog._id === blogId ? { ...blog, status: newStatus } : blog
        );
        setBlogs(updatedBlogs);
        toast.success(`Blog ${action}d successfully!`);
      } catch (error) {
        console.error("Error updating blog status:", error);
      }
    }
  };

  const handleDelete = async (blogId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await DeleteBlogById(blogId);
        setBlogs(blogs.filter((blog) => blog._id !== blogId));
        toast.success("Blog deleted successfully!");
      } catch (error) {
        console.error("Error deleting blog:", error);
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Blogs</h1>
      <div style={{ textAlign: "right" }}>
        <button
          onClick={() => navigate("/mainDashboard/addBlog")}
          className="btn btn-success mb-3"
        >
          Add Blog
        </button>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or description"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredBlogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th style={{ padding: "25px" }}>#</th>
                <th style={{ padding: "25px" }}>TITLE</th>
                <th style={{ padding: "25px" }}>DESCRIPTION</th>
                <th style={{ padding: "25px" }}>STATUS</th>

                <th style={{ padding: "25px" }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentBlogs.map((blog, index) => (
                <tr key={blog._id}>
                  <td>{index + 1 + indexOfFirstBlog}</td>
                  <td>{blog.title}</td>
                  <td>{blog.description}</td>

                  <td>
                    <button
                      onClick={() => handleStatusChange(blog._id)}
                      className={`btn btn-sm ${
                        blog.status ? "btn-warning" : "btn-secondary"
                      }`}
                    >
                      {blog.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleEdit(blog._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleView(blog)}
                        className="btn btn-info btn-sm"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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

      {selectedBlog && (
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Blog Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Title</label>
                  <div className="col-sm-9">
                    <p>
                      <strong>{selectedBlog.title}</strong>
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <p>
                      <strong>{selectedBlog.description}</strong>
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Content</label>
                  <div className="col-sm-9">
                    <div
                      dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                    />
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

export default ListBlogs;
