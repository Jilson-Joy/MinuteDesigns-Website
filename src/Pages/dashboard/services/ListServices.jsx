import { useState, useEffect } from 'react';
import { DeletePageById, GetAllPages, UpdatePageStatus } from '../../../api/pages'; 
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteServiceById, GetAllServices, UpdateServiceStatus } from '../../../api/services';

function ListServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await GetAllServices(1, 10); 
        setServices(result.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleEdit = (serviceId) => {
    navigate(`/mainDashboard/edit-service/${serviceId}`);
  };

  const handleDelete = async (serviceId) => {
    const confirmed = window.confirm('Are you sure you want to delete this service? This action cannot be undone.');
    if (confirmed) {
      try {
        await DeleteServiceById(serviceId); 
        setServices(services.filter(service => service._id !== serviceId));
      } catch (error) {
        console.error('Error deleting page:', error);
      }
    }
  };

  const handleStatusChange = async (serviceId) => {
    const serviceToUpdate = services.find(service => service._id === serviceId);
    
    if (!serviceToUpdate) {
      console.error('Service not found');
      return;
    }

    const newStatus = !serviceToUpdate.status;   
    const action = newStatus ? 'activate' : 'deactivate';
    const confirmed = window.confirm(`Are you sure you want to ${action} this service? This action cannot be undone.`);
    
    if (confirmed) {
      try {
        await UpdateServiceStatus(serviceId, newStatus);
        setServices(services.map(service => service._id === serviceId ? { ...service, status: newStatus } : service));
      } catch (error) {
        console.error('Error updating service status:', error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedService(null); 
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Services</h1>
      {services.length === 0 ? (
        <p>No Services available.</p> 
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Page URL</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th> 
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Change Status</th> 
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service._id}>
                <td>{index + 1}</td> 
                <td>{service.pageCode}</td> 
                <td>{service.name}</td>
                <td>{service.pageTitle}</td> 
                <td>{service.pageUrl}</td> 
                <td>{service.shortDescription}</td> 
                <td>{service.status ? 'Active' : 'Inactive'}</td> 
                <td>
                  <button 
                    onClick={() => handleEdit(service._id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleStatusChange(service._id)}
                    className="btn btn-warning"
                  >
                    {service.status ? 'Active' : 'Deactive'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedService && (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Page URL</label>
                  <div className="col-sm-9">
                    <p>{selectedService.pageUrl}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Page Title</label>
                  <div className="col-sm-9">
                    <p>{selectedService.pageTitle}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Name</label>
                  <div className="col-sm-9">
                    <p>{selectedService.name}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Short Description</label>
                  <div className="col-sm-9">
                    <p>{selectedService.shortDescription}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <p>{selectedService.description}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Content</label>
                  <div className="col-sm-9">
                    <div dangerouslySetInnerHTML={{ __html: selectedService.content }} />
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
    </div>
  );
}

export default ListServices;
