import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetServiceById } from "../../../api/services";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewService() {

  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL


  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const result = await GetServiceById(serviceId);
        console.log("Fetched service:", result);

        if (result.success) {
          setService(result.service); 
        } else {
          setError("Failed to load service details.");
        }
      } catch (error) {
        console.error("Error fetching service:", error);
        setError("Failed to load service details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

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

  if (!service) {
    return <div>No service found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Service Details</h1>
      <div className="mb-3 text-center">
        <button
          onClick={() => navigate("/mainDashboard/listServices")}
          className="btn btn-secondary"
          aria-label="Back to Service List"
        >
          Back to Service List
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
              <td>Service URL</td>
              <td>{service.serviceUrl || "N/A"}</td>
            </tr>
            <tr>
              <td>Service Title</td>
              <td>{service.serviceTitle || "N/A"}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{service.name || "N/A"}</td>
            </tr>
            <tr>
              <td>Short Description</td>
              <td>{service.shortDescription || "N/A"}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{service.description || "N/A"}</td>
            </tr>
            <tr>
              <td>Content</td>
              <td dangerouslySetInnerHTML={{ __html: service.content || "" }} />
            </tr>
            <tr>
              <td>Meta Title</td>
              <td>{service.meta && service.meta.length > 0 ? service.meta[0]?.metaTitle : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Description</td>
              <td>{service.meta && service.meta.length > 0 ? service.meta[0]?.metaDescription : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Author</td>
              <td>{service.meta && service.meta.length > 0 ? service.meta[0]?.metaAuthor : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Keywords</td>
              <td>{service.meta && service.meta.length > 0 ? service.meta[0]?.metaKeywords.join(", ") : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Tags</td>
              <td>{service.metaTags && service.metaTags.length > 0 ? service.metaTags.join(", ") : "N/A"}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{service.status ? "Active" : "Inactive"}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{new Date(service.createdAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{new Date(service.updatedAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Uploaded Files</td>
              <td>
  {service.imageUrl && service.imageUrl.length > 0 ? (
    <div className="d-flex flex-wrap">
      {service.imageUrl.map((url, idx) => {
        const fullUrl = `${baseUrl}${url}`;
        console.log(`Image URL: ${fullUrl}`); 
        return (
          <img
            key={idx}
            src={fullUrl}
            alt={`Gallery Image ${idx + 1}`}
            style={{ width: "50px", height: "50px", marginRight: "5px" }}
          />
        );
      })}
    </div>
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

export default ViewService;
