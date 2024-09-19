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
  const [selectedPage, setSelectedPage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pagesPerPage] = useState(5);
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

  const indexOfLastPage = currentPage * pagesPerPage;
  const indexOfFirstPage = indexOfLastPage - pagesPerPage;
  const currentPages = pages.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const handleView = (page) => {
    setSelectedPage(page);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPage(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Pagination logic
  const totalPages = Math.ceil(pages.length / pagesPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="container">
      <h1 className="mt-4">List of Pages</h1>
      <div style={{ textAlign: "right" }}>
        <button
          onClick={() => navigate("/mainDashboard/addPage")}
          className="btn btn-success mb-3"
        >
          Add Page
        </button>
      </div>
      {pages.length === 0 ? (
        <p>No pages available.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sl No.</th>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Page URL</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                <th scope="col">Status</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {currentPages.map((page, index) => (
                <tr key={page._id}>
                  <td>{indexOfFirstPage + index + 1}</td>
                  <td>{page.pageCode}</td>
                  <td>{page.name}</td>
                  <td>{page.pageTitle}</td>
                  <td>{page.pageUrl}</td>
                  <td>{page.shortDescription}</td>

                  <td>
                    <button
                      onClick={() => handleEdit(page._id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(page._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(page._id)}
                      className="btn btn-warning"
                    >
                      {page.status ? "Active" : "Deactive"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleView(page)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <nav>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <button
                    onClick={() => paginate(number)}
                    className={`page-link ${
                      currentPage === number ? "active" : ""
                    }`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}

      {showModal && selectedPage && (
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Page Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                {/* Details of selected page */}
                <div className="row mb-3">
                  <label className="col-sm-3">Page URL</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.pageUrl}</p>
                  </div>
                </div>
                {/* Add other details as before */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={handleCloseModal}
        ></div>
      )}

      <ToastContainer />
    </div>
  );
}

export default ListPages;
