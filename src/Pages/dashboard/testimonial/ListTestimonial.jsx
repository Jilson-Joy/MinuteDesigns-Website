import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DeleteTestimonialById,
  GetAllTestimonial,
  UpdateTestimonialStatus,
} from "../../../api/testimonial";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fetchTestimonials = async () => {
    try {
      const result = await GetAllTestimonial();
      setTestimonials(result.testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      toast.error("Failed to fetch testimonials.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleEdit = (testimonialId) => {
    navigate(`/mainDashboard/edit-testimonial/${testimonialId}`);
  };

  const handleStatusChange = async (testimonialId) => {
    const testimonialToUpdate = testimonials.find(
      (testimonial) => testimonial._id === testimonialId
    );
    if (!testimonialToUpdate) {
      console.error("Testimonial not found");
      return;
    }

    const newStatus = !testimonialToUpdate.status;
    const action = newStatus ? "activate" : "deactivate";
    const confirmed = window.confirm(
      `Are you sure you want to ${action} this testimonial? This action cannot be undone.`
    );

    if (confirmed) {
      try {
        await UpdateTestimonialStatus(testimonialId, newStatus);
        const updatedTestimonials = testimonials.map((testimonial) =>
          testimonial._id === testimonialId
            ? { ...testimonial, status: newStatus }
            : testimonial
        );
        setTestimonials(updatedTestimonials);
        toast.success(`Testimonial ${action}d successfully!`);
      } catch (error) {
        console.error("Error updating testimonial status:", error);
        toast.error("Failed to update testimonial status.");
      }
    }
  };

  const handleDelete = async (testimonialId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this testimonial? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await DeleteTestimonialById(testimonialId);
        setTestimonials(
          testimonials.filter(
            (testimonial) => testimonial._id !== testimonialId
          )
        );
        toast.success("Testimonial deleted successfully!");
      } catch (error) {
        console.error("Error deleting testimonial:", error);
        toast.error("Failed to delete testimonial.");
      }
    }
  };

  const handleView = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredTestimonials = testimonials.filter((testimonial) => {
    return (
      (testimonial.name &&
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (testimonial.description &&
        testimonial.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = filteredTestimonials.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">List of Testimonials</h1>
      </div>

      {/* breadcrumb */}
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Service List
            </li>
          </ol>
        </nav>
      </div>

      <div className="row display-flex">
        <div className="mb-3 col-md-6 text-left">
          <button
            onClick={() => navigate("/mainDashboard/addTestimonial")}
            className="btn btn-success"
          >
            Add Testimonial
          </button>
        </div>

        <div className="mb-3 col-md-6 text-right">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or description"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th style={{ padding: "34px" }}>#</th>
                <th style={{ padding: "34px" }}>TITLE</th>
                <th style={{ padding: "34px" }}>DESCRIPTION</th>
                <th style={{ padding: "34px" }}>STATUS</th>
                <th style={{ padding: "34px" }}>ACTIONS</th>
              </tr>
            </thead>
      {filteredTestimonials.length === 0 ? (
        <tr className="text-muted">
          <td colSpan="8" className="text-center text-muted">
          No testimonials available.</td>
          </tr>
      ) : (
        
            <tbody>
              {currentTestimonials.map((testimonial, index) => (
                <tr key={testimonial._id}>
                  <td>{index + 1 + indexOfFirstItem}</td>
                  <td>{testimonial.title}</td>
                  <td>{testimonial.description}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(testimonial._id)}
                      className={`btn btn-sm ${testimonial.status ? "btn-warning" : "btn-secondary"}`}
                    >
                      {testimonial.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleEdit(testimonial._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleView(testimonial)}
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
            <li key={index + 1} className="page-item">
              <button
                className={`page-link ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {showModal && selectedTestimonial && (
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Page Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <strong className="col-sm-3">Title:</strong>
                  <div className="col-sm-9">
                    <strong>{selectedTestimonial.title}</strong>
                  </div>
                </div>
                <div className="row mb-3">
                  <strong className="col-sm-3">Description:</strong>
                  <div className="col-sm-9">
                    <div>{selectedTestimonial.description}</div>
                  </div>
                </div>
                <div className="row mb-3">
                  <strong className="col-sm-3">Content:</strong>
                  <div className="col-sm-9">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedTestimonial.content,
                      }}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <strong className="col-sm-3">Created At:</strong>
                  <div className="col-sm-9">
                    <div>
                      {new Date(selectedTestimonial.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <strong className="col-sm-3">Updated At:</strong>
                  <div className="col-sm-9">
                    <div>
                      {new Date(selectedTestimonial.updatedAt).toLocaleString()}
                    </div>
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

      <ToastContainer />
    </div>
  );
}

export default ListTestimonials;
