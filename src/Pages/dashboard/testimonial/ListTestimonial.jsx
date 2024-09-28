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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
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

  const handleView = (testimonialId) => {
    navigate(`/mainDashboard/view-testimonial/${testimonialId}`);
  };

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
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredTestimonials = testimonials.filter((testimonial) => {
    return (
      (testimonial.title &&
        testimonial.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
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

      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Testimonial List
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
            placeholder="Search by title or description"
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
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {filteredTestimonials.length === 0 ? (
            <tbody>
              <tr className="text-muted">
                <td colSpan="8" className="text-center">
                  No testimonials available.
                </td>
              </tr>
            </tbody>
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
                      className={`btn btn-sm ${
                        testimonial.status ? "btn-warning" : "btn-secondary"
                      }`}
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
                        onClick={() => handleView(testimonial._id)}
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
                className={`page-link ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <ToastContainer />
    </div>
  );
}

export default ListTestimonials;
