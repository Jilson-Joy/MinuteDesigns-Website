import { useState, useEffect } from "react";
import {
  DeletePageById,
  GetAllPages,
  UpdatePageStatus,
} from "../../../api/pages";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListPages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const result = await GetAllPages();
        setPages(result.pages);
      } catch (error) {
        console.error("Error fetching pages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  const handleView = (pageId) => {
    navigate(`/mainDashboard/page/${pageId}`);
  };


  const handleEdit = (pageId) => {
    navigate(`/mainDashboard/edit-page/${pageId}`);
  };

  const handleDelete = async (pageId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this page? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await DeletePageById(pageId);
        setPages(pages.filter((page) => page._id !== pageId));
        toast.success("Page deleted successfully!");
      } catch (error) {
        console.error("Error deleting page:", error);
        toast.error("Failed to delete page.");
      }
    }
  };

  const handleStatusChange = async (pageId) => {
    const pageToUpdate = pages.find((page) => page._id === pageId);

    if (!pageToUpdate) {
      console.error("Page not found");
      return;
    }

    const newStatus = !pageToUpdate.status;
    const action = newStatus ? "activate" : "deactivate";
    const confirmed = window.confirm(
      `Are you sure you want to ${action} this page? This action cannot be undone.`
    );

    if (confirmed) {
      try {
        await UpdatePageStatus(pageId, newStatus);
        setPages(
          pages.map((page) =>
            page._id === pageId ? { ...page, status: newStatus } : page
          )
        );
        toast.success(`Page ${action}d successfully!`);
      } catch (error) {
        console.error("Error updating page status:", error);
        toast.error("Failed to update page status.");
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPages = pages.filter((page) => {
    return (
      page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPages = filteredPages.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">List of Pages</h1>
      </div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Pages List
            </li>
          </ol>
        </nav>
      </div>

      <div className="row display-flex">
        <div className="mb-3 col-md-6 text-left">
          <button
            onClick={() => navigate("/mainDashboard/addPage")}
            className="btn btn-success"
          >
            Add Page
          </button>
        </div>

        <div className="mb-3 col-md-6 text-right">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or title or description"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th style={{ padding: "25px" }}>#</th>
              <th style={{ padding: "25px" }}>CODE</th>
              <th style={{ padding: "25px" }}>NAME</th>
              <th style={{ padding: "25px" }}>TITLE</th>
              <th style={{ padding: "25px" }}>PAGE URL</th>
              <th style={{ padding: "25px" }}>DESCRIPTION</th>
              <th style={{ padding: "25px" }}>STATUS</th>
              <th style={{ padding: "25px" }}>ACTIONS</th>
            </tr>
          </thead>
          {currentPages.length === 0 ? (
            <tr className="text-muted">
              <td colSpan={10} className="text-center">
                No pages available.
              </td>
            </tr>
          ) : (
            <tbody>
              {currentPages.map((page, index) => (
                <tr key={page._id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{page.pageCode}</td>
                  <td>{page.name}</td>
                  <td>{page.pageTitle}</td>
                  <td>{page.pageUrl}</td>
                  <td>{page.shortDescription}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(page._id)}
                      className={`btn btn-sm ${
                        page.status ? "btn-warning" : "btn-secondary"
                      }`}
                    >
                      {page.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button onClick={() => handleEdit(page._id)} className="btn btn-primary btn-sm">Edit</button>
                      <button onClick={() => handleDelete(page._id)} className="btn btn-danger btn-sm">Delete</button>
                      <button onClick={() => handleView(page._id)} className="btn btn-info btn-sm">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <nav>
        <ul className="pagination justify-content-center">
          {Array.from(
            { length: Math.ceil(filteredPages.length / itemsPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      <ToastContainer />
    </div>
  );
}

export default ListPages;
