import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteServiceById, GetAllServices, UpdateServiceStatus } from '../../../api/services';
import { ToastContainer, toast } from 'react-toastify'; 


function ListServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const result = await GetAllServices(1, 10); 
        setServices(result.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  const handleEdit = (serviceId) => {
    navigate(`/mainDashboard/edit-service/${serviceId}`);
  };

  const handleDelete = async (pageId) => {
    const confirmed = window.confirm('Are you sure you want to delete this page? This action cannot be undone.');
    if (confirmed) {
      try {
        await DeleteServiceById(pageId); 
        setServices(services.filter(page => page._id !== pageId));
        toast.success('service deleted successfully!');
      } catch (error) {
        console.error('Error service page:', error);
        toast.error('Failed to service page.');
      }
    }
  };

  const handleStatusChange = async (pageId) => {
    const pageToUpdate = services.find(page => page._id === pageId);
    
    if (!pageToUpdate) {
      console.error('service not found');
      return;
    }

    const newStatus = !pageToUpdate.status;   
    const action = newStatus ? 'activate' : 'deactivate';
    const confirmed = window.confirm(`Are you sure you want to ${action} this page? This action cannot be undone.`);
    
    if (confirmed) {
      try {
        await UpdateServiceStatus(pageId, newStatus);
        setServices(services.map(page => page._id === pageId ? { ...page, status: newStatus } : page));
        toast.success(`service ${action}d successfully!`);
      } catch (error) {
        console.error('Error updating service status:', error);
        toast.error('Failed to update service status.');
      }
    }
  };

  const handleView = (page) => {
    setSelectedPage(page);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPage(null);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Services</h1>
      <div style={{ textAlign: 'right' }}>
        <button
          onClick={() => navigate('/mainDashboard/addServices')} 
          className="btn btn-success mb-3"
        >
          Add Service
        </button>
      </div>
      {services.length === 0 ? (
        <p>No pages available.</p> 
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Service URL</th>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Status</th> 
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {services.map((page, index) => (
              <tr key={page._id}>
                <td>{index + 1}</td> 
                <td>{page.pageCode}</td> 
                <td>{page.name}</td>
                <td>{page.pageTitle}</td> 
                <td>{page.pageUrl}</td> 
                <td>{page.shortDescription}</td> 
               
                <td>
                  <button 
                    onClick={() => handleEdit(page._id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(page._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleStatusChange(page._id)}
                    className="btn btn-warning"
                  >
                    {page.status ? 'Active' : 'Deactive'}
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleView(page)} 
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

      {showModal && selectedPage && (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Page Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Page URL</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.pageUrl}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Page Title</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.pageTitle}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Name</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.name}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Short Description</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.shortDescription}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.description}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Content</label>
                  <div className="col-sm-9">
                    <div dangerouslySetInnerHTML={{ __html: selectedPage.content }} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Meta Title</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.meta?.[0]?.metaTitle}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Meta Description</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.meta?.[0]?.metaDescription}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Meta Author</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.meta?.[0]?.metaAuthor}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Meta Keywords</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.meta?.[0]?.metaKeywords.join(', ')}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Meta Tags</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.metaTags.join(', ')}</p>
                  </div>
                </div>

      

                <div className="row mb-3">
                  <label className="col-sm-3">Created At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedPage.createdAt).toLocaleString()}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Updated At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedPage.updatedAt).toLocaleString()}</p>
                  </div>
                </div>

               

                <div className="row mb-3">
                  <label className="col-sm-3">Status</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.status ? 'Active' : 'Inactive'}</p>
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

export default ListServices;
