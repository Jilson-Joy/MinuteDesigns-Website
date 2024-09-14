import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteTestimonialById, GetAllTestimonial } from '../../../api/testimonial';

function ListTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null); 
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const result = await GetAllTestimonial(1, 10); 
        setTestimonials(result.testimonials);
      } catch (error) {
        console.error('Error fetching testimonial:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

 

  const handleEdit = (pageId) => {
    navigate(`edit-testimonial/${pageId}`); 
  };


  const handleDelete = async (testimonialId) => {
    try {
      await DeleteTestimonialById(testimonialId); 
      setTestimonials(testimonials.filter(page => page._id !== testimonialId)); 
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedPage(null)
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
              <th scope="col">title</th>
              <th scope="col">description</th>
              <th scope="col">content</th>
          
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonials, index) => (
              <tr key={testimonials._id}>
                <td>{index + 1}</td> 
                <td>{testimonials.title}</td> 
                <td>{testimonials.description}</td>
                <td>{testimonials.content}</td>

              
               
                <td>
                  <button 
                    onClick={() => handleEdit(testimonials._id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(testimonials._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedPage && (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
           
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Title</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.pageUrl}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.pageTitle}</p>
                  </div>
                </div>

               

                <div className="row mb-3">
                  <label className="col-sm-3">Content</label>
                  <div className="col-sm-9">
                    <div dangerouslySetInnerHTML={{ __html: selectedPage.content }} />
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

export default ListTestimonials;
