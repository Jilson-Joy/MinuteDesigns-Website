import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GetAllGalleriesApi,
  DeleteGalleryById,
  UpdateGalleryStatus,
} from "../../../api/gallery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListGallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchGalleries = async () => {
    try {
      const result = await GetAllGalleriesApi();
      setGalleries(result.galleries);
    } catch (error) {
      console.error("Error fetching galleries:", error);
      toast.error("Failed to load galleries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  const handleDelete = async (galleryId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this gallery? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await DeleteGalleryById(galleryId);
        setGalleries(galleries.filter((gallery) => gallery._id !== galleryId));
        toast.success("Gallery deleted successfully!");
      } catch (error) {
        console.error("Error deleting gallery:", error);
        toast.error("Failed to delete gallery.");
      }
    }
  };

  const handleView = (gallery) => {
    setSelectedGallery(gallery);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    navigate(`/mainDashboard/edit-gallery/${id}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = async (galleryId, currentStatus) => {
    const newStatus = !currentStatus;
    const confirmed = window.confirm(
      `Are you sure you want to ${newStatus ? "activate" : "deactivate"} this gallery?`
    );
    if (confirmed) {
      try {
        await UpdateGalleryStatus(galleryId, newStatus);
        setGalleries(
          galleries.map((gallery) =>
            gallery._id === galleryId
              ? { ...gallery, status: newStatus }
              : gallery
          )
        );
        toast.success(
          `Gallery ${newStatus ? "activated" : "deactivated"} successfully!`
        );
      } catch (error) {
        console.error("Error updating gallery status:", error);
        toast.error("Failed to update gallery status.");
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGallery(null);
  };

  const filteredGalleries = galleries.filter((gallery) =>
    gallery.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGallery = filteredGalleries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredGalleries.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="text-primary">List of Galleries</h1>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Gallery List
            </li>
          </ol>
        </nav>
      </div>
      <div className="row display-flex">
        <div className="mb-3 col-md-6 text-left">
          <button
            onClick={() => navigate("/mainDashboard/addGallery")}
            className="btn btn-success"
          >
            Add Gallery
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
              <th>#</th>
              <th>Category Name</th>
              <th>Type</th>
              <th>Image URL</th> <th>Video URL</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentGallery.length === 0 ? (
              <tr className="text-muted">
                <td colSpan="6" className="text-center">
                  No galleries available.
                </td>
              </tr>
            ) : (
              currentGallery.map((gallery, index) => (
                <tr key={gallery._id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{gallery.categoryName}</td>
                  <td>{gallery.type}</td>
                  <td>
                    {gallery.imageUrl.length > 0
                      ? gallery.imageUrl.map((url, idx) => (
                          <img
                            key={idx}
                            src={`${baseUrl}${url}`}
                            alt={`Gallery Image ${idx + 1}`}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "5px",
                            }}
                          />
                        ))
                      : "No image"}
                  </td>
                  <td>
                    {gallery.videoUrl ? gallery.videoUrl : "No video Url"}
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        handleStatusChange(gallery._id, gallery.status)
                      }
                      className={`btn btn-sm ${gallery.status ? "btn-success" : "btn-danger"}`}
                    >
                      {gallery.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleView(gallery)}
                        className="btn btn-info btn-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEdit(gallery._id)}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(gallery._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
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

      {showModal && selectedGallery && (
        <div
          className={`modal ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Gallery Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Category Name:</strong> {selectedGallery.categoryName}
                </p>
                <p>
                  <strong>Type:</strong> {selectedGallery.type}
                </p>

                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(selectedGallery.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Updated At:</strong>{" "}
                  {new Date(selectedGallery.updatedAt).toLocaleString()}
                </p>
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
};

export default ListGallery;
