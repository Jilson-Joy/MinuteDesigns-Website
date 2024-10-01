import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetPortfolioById } from "../../../api/portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewPortFolios() {
  const { portfolioId } = useParams();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!portfolioId) {
        setError("Portfolio ID is not provided.");
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        console.log("Fetching portfolio with ID:", portfolioId);
        const result = await GetPortfolioById(portfolioId);
        console.log("Fetched result:", result);

        if (result.success) {
          setPortfolio(result.portfolio);
        } else {
          setError("Failed to load portfolio details.");
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        setError("Failed to load portfolio details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

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

  if (!portfolio) {
    return <div>No portfolio found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Portfolio Details</h1>
      <div className="mb-3 text-center">
        <button
          onClick={() => navigate("/mainDashboard/listPortfolios")}
          className="btn btn-secondary"
          aria-label="Back to Portfolio List"
        >
          Back to Portfolio List
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
              <td>{portfolio.title || "N/A"}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{portfolio.description || "N/A"}</td>
            </tr>
            <tr>
              <td>Content</td>
              <td dangerouslySetInnerHTML={{ __html: portfolio.content || "" }} />
            </tr>
            <tr>
              <td>Status</td>
              <td>{portfolio.status ? "Active" : "Inactive"}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{new Date(portfolio.createdAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{new Date(portfolio.updatedAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Uploaded File</td>
              <td>
                {portfolio.imageUrl ? (
                  <img
                    src={`${baseUrl}${portfolio.imageUrl}`} // Use the base URL to display image
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

export default ViewPortFolios;
