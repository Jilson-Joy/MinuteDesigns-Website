import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteTestimonialById, GetAllTestimonial, UpdateTestimonialStatus } from '../../../api/testimonial';

function ListTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const handleEdit = (pageId) => {
    navigate(`/mainDashboard/edit-testimonial/${pageId}`); 
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
  
      } catch (error) {
        console.error('Error updating testimonial status:', error);
      }
    }
  };
  

  const handleDelete = async (testimonialId) => {
      const confirmed = window.confirm('Are you sure you want to delete this testimonial? This action cannot be undone.');
      if(confirmed){
        try{
          await DeleteTestimonialById(testimonialId); 
          setTestimonials(testimonials.filter(testimonial => testimonial._id !== testimonialId)); 
          
        }
        catch (error) {
          console.error('Error deleting testimonial:', error);
        }
      }
    };
 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Testimonials</h1>
      {testimonials.length === 0 ? (
        <p>No testimonials available.</p> 
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Content</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Status change</th>

            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={testimonial._id}>
                <td>{index + 1}</td> 
                <td>{testimonial.title}</td> 
                <td>{testimonial.description}</td>
                <td>{testimonial.content}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListTestimonials;
