import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetTestimonialById } from "../../../api/testimonial"; 
import "bootstrap/dist/css/bootstrap.min.css";

function ViewTestimonial() {
  const { testimonialId } = useParams();
  console.log("Testimonial ID from URL:", testimonialId);

  const [testimonial, setTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchTestimonial = async () => {
      if (!testimonialId) {
        console.log(testimonialId,'testimonialid')
        setError("Testimonial ID is not provided.");
        setLoading(false);
        return; 
      }
      setLoading(true);
      try {
        console.log("Fetching testimonial with ID:", testimonialId);
        const result = await GetTestimonialById(testimonialId);
        console.log("Fetched result:", result); 

        if (result.success) {
          setTestimonial(result.testimonial); 
        } else {
          setError("Failed to load testimonial details.");
        }
      } catch (error) {
        console.error("Error fetching testimonial:", error);
        setError("Failed to load testimonial details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, [testimonialId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!testimonial) {
    return <div>No testimonial found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Testimonial Details</h1>
      <div className="mb-3 text-center">
        <button
          onClick={() => navigate("/mainDashboard/listTestimonials")}
          className="btn btn-secondary"
          aria-label="Back to Testimonial List"
        >
          Back to Testimonial List
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{testimonial.title || "N/A"}</td>
            </tr>
           
            <tr>
              <td>Description</td>
              <td>{testimonial.description || "N/A"}</td>
            </tr>
            <tr>
              <td>Content</td>
              <td dangerouslySetInnerHTML={{ __html: testimonial.content || "" }} />
            </tr>
            <tr>
              <td>Status</td>
              <td>{testimonial.status ? "Active" : "Inactive"}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{new Date(testimonial.createdAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{new Date(testimonial.updatedAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Uploaded File</td>
              <td>
                {testimonial.imageUrl ? (
                  <img
                    src={`${baseUrl}${testimonial.imageUrl}`}
                    alt="Uploaded"
                    style={{ width: "300px", height: "300px" }}
                  />
                ) : (
                  "No uploaded files available."
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewTestimonial;
