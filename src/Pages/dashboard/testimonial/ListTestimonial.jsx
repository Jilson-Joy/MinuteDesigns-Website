import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteTestimonialById, GetAllTestimonial, UpdateTestimonialStatus } from '../../../api/testimonial';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function ListTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fetchTestimonials = async () => {
    try {
      const result = await GetAllTestimonial(1, 10); 
      setTestimonials(result.testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
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
    const testimonialToUpdate = testimonials.find(testimonial => testimonial._id === testimonialId);
  
    if (!testimonialToUpdate) {
      console.error('Testimonial not found');
      return;
    }
  
    const newStatus = !testimonialToUpdate.status;
    const action = newStatus ? 'activate' : 'deactivate';
    const confirmed = window.confirm(`Are you sure you want to ${action} this testimonial? This action cannot be undone.`);
  
    if (confirmed) {
      try {
        await UpdateTestimonialStatus(testimonialId, newStatus);
  
        const updatedTestimonials = testimonials.map(testimonial => 
          testimonial._id === testimonialId ? { ...testimonial, status: newStatus } : testimonial
        );
        setTestimonials(updatedTestimonials); 
        toast.success(`Testimonial ${action}d successfully!`);
  
      } catch (error) {
        console.error('Error updating testimonial status:', error);
      }
    }
  };

  const handleDelete = async (testimonialId) => {
    const confirmed = window.confirm('Are you sure you want to delete this testimonial? This action cannot be undone.');
    if (confirmed) {
      try {
        await DeleteTestimonialById(testimonialId); 
        setTestimonials(testimonials.filter(testimonial => testimonial._id !== testimonialId)); 
        toast.success('Testimonial deleted successfully!');
      } catch (error) {
        console.error('Error deleting testimonial:', error);
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

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Testimonials</h1>
      <div style={{ textAlign: 'right' }}>
        <button
          onClick={() => navigate('/mainDashboard/addTestimonial')} 
          className="btn btn-success mb-3"
        >
          Add Testimonial
        </button>
      </div>
      {testimonials.length === 0 ? (
        <p>No testimonials available.</p> 
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
            {testimonials.map((testimonial, index) => (
              <tr key={testimonial._id}>
                <td>{index + 1}</td> 
                <td>{testimonial.title}</td> 
                <td>{testimonial.description}</td>
                <td>
                  <button 
                    onClick={() => handleEdit(testimonial._id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(testimonial._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleStatusChange(testimonial._id)}
                    className="btn btn-warning"
                  >
                    {testimonial.status ? 'Active' : 'Deactive'}
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleView(testimonial)} 
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

      {selectedTestimonial && (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Testimonial Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Title</label>
                  <div className="col-sm-9">
                    <p>{selectedTestimonial.title}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <p>{selectedTestimonial.description}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Content</label>
                  <div className="col-sm-9">
                    <div dangerouslySetInnerHTML={{ __html: selectedTestimonial.content }} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Created At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedTestimonial.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3">Updated At</label>
                  <div className="col-sm-9">
                    <p>{new Date(selectedTestimonial.updatedAt).toLocaleString()}</p>
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

export default ListTestimonials;
