import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetBlogById } from "../../../api/blog";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError("Blog ID is not provided.");
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const result = await GetBlogById(id);

        if (result.success) {
          setBlog(result.blog);
        } else {
          setError("Failed to load blog details.");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

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

  if (!blog) {
    return <div>No blog found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Blog Details</h1>
      <div className="mb-3 text-center">
        <button
          onClick={() => navigate("/mainDashboard/listBlogs")}
          className="btn btn-secondary"
          aria-label="Back to Blog List"
        >
          Back to Blog List
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
              <td>{blog.title || "N/A"}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{blog.description || "N/A"}</td>
            </tr>
            <tr>
              <td>Content</td>
              <td dangerouslySetInnerHTML={{ __html: blog.content || "" }} />
            </tr>
            <tr>
              <td>Status</td>
              <td>{blog.status ? "Active" : "Inactive"}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{new Date(blog.createdAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{new Date(blog.updatedAt).toLocaleString() || "Invalid Date"}</td>
            </tr>
            <tr>
              <td>Uploaded File</td>
              <td>
                {blog.imageUrl ? (
                  <img
                    src={`${baseUrl}${blog.imageUrl}`}
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

export default ViewBlog;
