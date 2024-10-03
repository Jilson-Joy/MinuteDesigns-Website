import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetPageById } from "../../../api/pages"; 
import "bootstrap/dist/css/bootstrap.min.css";

function ViewPage() {
  const { pageId } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      try {
        const result = await GetPageById(pageId); 
        console.log("Fetched page:", result);

        if (result.success) {
          setPage(result.page); 
        } else {
          setError("Failed to load page details.");
        }
      } catch (error) {
        console.error("Error fetching page:", error);
        setError("Failed to load page details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [pageId]);

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

  if (!page) {
    return <div>No page found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Page Details</h1>
      <div className="mb-3 text-center">
        <button
          onClick={() => navigate("/mainDashboard/listPage")} 
          className="btn btn-secondary"
          aria-label="Back to Page List"
        >
          Back to Page List
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
              <td>Page URL</td>
              <td>{page.pageUrl || "N/A"}</td>
            </tr>
            <tr>
              <td>Page Title</td>
              <td>{page.pageTitle || "N/A"}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{page.name || "N/A"}</td>
            </tr>
            <tr>
              <td>Short Description</td>
              <td>{page.shortDescription || "N/A"}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{page.description || "N/A"}</td>
            </tr>
            <tr>
              <td>Content</td>
              <td dangerouslySetInnerHTML={{ __html: page.content || "" }} />
            </tr>
            <tr>
              <td>Meta Title</td>
              <td>{page.meta && page.meta.length > 0 ? page.meta[0]?.metaTitle : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Description</td>
              <td>{page.meta && page.meta.length > 0 ? page.meta[0]?.metaDescription : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Author</td>
              <td>{page.meta && page.meta.length > 0 ? page.meta[0]?.metaAuthor : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Keywords</td>
              <td>{page.meta && page.meta.length > 0 ? page.meta[0]?.metaKeywords.join(", ") : "N/A"}</td>
            </tr>
            <tr>
              <td>Meta Tags</td>
              <td>{page.metaTags && page.metaTags.length > 0 ? page.metaTags.join(", ") : "N/A"}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{page.status ? "Active" : "Inactive"}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{new Date(page.createdAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{new Date(page.updatedAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Uploaded File</td>
              <td>
                {page.imageUrl ? (
                  <img
                    src={`${baseUrl}${page.imageUrl}`}
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

export default ViewPage;
