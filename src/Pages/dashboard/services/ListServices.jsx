import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DeleteServiceById,
  GetAllServices,
  UpdateServiceStatus,
} from "../../../api/services";
import { ToastContainer, toast } from "react-toastify";

function ListServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedPage, setSelectedPage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const result = await GetAllServices(currentPage, itemsPerPage);
        setServices(result.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [currentPage]);

  const handleEdit = (serviceId) => {
    navigate(`/mainDashboard/edit-service/${serviceId}`);
  };

  const handleDelete = async (serviceId) => {
    const confirmed = window.confirm("Are you sure you want to delete this service? This action cannot be undone.");
    if (confirmed) {
      try {
        await DeleteServiceById(serviceId);
        setServices(services.filter((service) => service._id !== serviceId));
        toast.success("Service deleted successfully!");
      } catch (error) {
        console.error("Error deleting service:", error);
        toast.error("Failed to delete service.");
      }
    }
  };

  const handleStatusChange = async (serviceId) => {
    const serviceToUpdate = services.find((service) => service._id === serviceId);
    if (!serviceToUpdate) {
      console.error("Service not found");
      return;
    }
    const newStatus = !serviceToUpdate.status;
    const action = newStatus ? "activate" : "deactivate";
    const confirmed = window.confirm(`Are you sure you want to ${action} this service? This action cannot be undone.`);
    if (confirmed) {
      try {
        await UpdateServiceStatus(serviceId, newStatus);
        setServices(services.map((service) => (service._id === serviceId ? { ...service, status: newStatus } : service)));
        toast.success(`Service ${action}d successfully!`);
      } catch (error) {
        console.error("Error updating service status:", error);
        toast.error("Failed to update service status.");
      }
    }
  };

  const handleView = (service) => {
    setSelectedPage(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPage(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastService = currentPage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">List of Services</h1>
        <button onClick={() => navigate("/mainDashboard/addServices")} className="btn btn-success">Add Service</button>
      </div>
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search by name, title, or description" 
          value={searchTerm} 
          onChange={handleSearch} 
        />
      </div>
      
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th style={{ padding: "25px" }}>#</th>
              <th style={{ padding: "25px" }}>CODE</th>
              <th style={{ padding: "25px" }}>NAME</th>
              <th style={{ padding: "25px" }}>TITLE</th>
              <th style={{ padding: "25px" }}>SERVICE URL</th>
              <th style={{ padding: "25px" }}>DESCRIPTION</th>
              <th style={{ padding: "25px" }}>STATUS</th>
              <th style={{ padding: "25px" }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentServices.length > 0 ? (
              currentServices.map((service, index) => (
                <tr key={service._id}>
                  <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                  <td>{service.serviceCode}</td>
                  <td>{service.name}</td>
                  <td>{service.serviceTitle}</td>
                  <td>{service.serviceUrl}</td>
                  <td>{service.shortDescription}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(service._id)}
                      className={`btn btn-sm ${service.status ? "btn-warning" : "btn-secondary"}`}
                    >
                      {service.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button onClick={() => handleEdit(service._id)} className="btn btn-primary btn-sm">Edit</button>
                      <button onClick={() => handleDelete(service._id)} className="btn btn-danger btn-sm">Delete</button>
                      <button onClick={() => handleView(service)} className="btn btn-info btn-sm">View</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-muted">No services found matching your search criteria.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination justify-content-center">
          {Array.from(
            { length: totalPages },
            (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      {showModal && selectedPage && (
        <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1" style={{ display: showModal ? "block" : "none" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Service Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3"><strong>Service URL:</strong> {selectedPage.pageUrl}</div>
                <div className="mb-3"><strong>Title:</strong> {selectedPage.pageTitle}</div>
                <div className="mb-3"><strong>Name:</strong> {selectedPage.name}</div>
                <div className="mb-3"><strong>Short Description:</strong> {selectedPage.shortDescription}</div>
                <div className="mb-3"><strong>Description:</strong> {selectedPage.description}</div>
                <div className="mb-3"><strong>Content:</strong>
                  <div dangerouslySetInnerHTML={{ __html: selectedPage.content }} />
                </div>
                <div className="mb-3"><strong>Meta Information:</strong>
                  <ul>
                    <li><strong>Meta Title:</strong> {selectedPage.meta?.[0]?.metaTitle}</li>
                    <li><strong>Meta Description:</strong> {selectedPage.meta?.[0]?.metaDescription}</li>
                    <li><strong>Meta Author:</strong> {selectedPage.meta?.[0]?.metaAuthor}</li>
                    <li><strong>Meta Keywords:</strong> {selectedPage.meta?.[0]?.metaKeywords?.join(", ")}</li>
                  </ul>
                </div>
                <div className="mb-3"><strong>Status:</strong> {selectedPage.status ? "Active" : "Inactive"}</div>
                <div className="mb-3"><strong>Created At:</strong> {new Date(selectedPage.createdAt).toLocaleString()}</div>
                <div className="mb-3"><strong>Updated At:</strong> {new Date(selectedPage.updatedAt).toLocaleString()}</div>
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

export default ListServices;
