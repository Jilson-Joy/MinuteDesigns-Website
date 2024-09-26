import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetServiceById } from "../../../api/services";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewService() {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const result = await GetServiceById(serviceId);
        setService(result);
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!service) {
    return <div>No service found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Service Details</h1>
      <div className="mb-3">
        <button onClick={() => navigate("/mainDashboard")} className="btn btn-secondary">
          Back to Service List
        </button>
      </div>
      <div className="mb-3"><strong>Service URL:</strong> {service.serviceUrl}</div>
      <div className="mb-3"><strong>Title:</strong> {service.serviceTitle}</div>
      <div className="mb-3"><strong>Name:</strong> {service.name}</div>
      <div className="mb-3"><strong>Short Description:</strong> {service.shortDescription}</div>
      <div className="mb-3"><strong>Description:</strong> {service.description}</div>
      <div className="mb-3"><strong>Content:</strong>
        <div dangerouslySetInnerHTML={{ __html: service.content }} />
      </div>
      <div className="mb-3"><strong>Meta Information:</strong>
        <ul>
          <li><strong>Meta Title:</strong> {service.meta?.[0]?.metaTitle}</li>
          <li><strong>Meta Description:</strong> {service.meta?.[0]?.metaDescription}</li>
          <li><strong>Meta Author:</strong> {service.meta?.[0]?.metaAuthor}</li>
          <li><strong>Meta Keywords:</strong> {service.meta?.[0]?.metaKeywords?.join(", ")}</li>
        </ul>
      </div>
      <div className="mb-3"><strong>Status:</strong> {service.status ? "Active" : "Inactive"}</div>
      <div className="mb-3"><strong>Created At:</strong> {new Date(service.createdAt).toLocaleString()}</div>
      <div className="mb-3"><strong>Updated At:</strong> {new Date(service.updatedAt).toLocaleString()}</div>
    </div>
  );
}

export default ViewService;
