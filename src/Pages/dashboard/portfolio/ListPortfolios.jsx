import { useState, useEffect } from "react";
import {
  DeletePortfolioById,
  GetAllPortfolios,
  UpdatePortfolioStatus,
} from "../../../api/portfolio";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListPortfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const result = await GetAllPortfolios();
        setPortfolios(result.portfolios);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  const handleView = (portfolioId) => {
    navigate(`/mainDashboard/view-portfolio/${portfolioId}`); 
  };

  const handleEdit = (portfolioId) => {
    navigate(`/mainDashboard/edit-portfolio/${portfolioId}`); 
  };

  const handleDelete = async (portfolioId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this portfolio? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await DeletePortfolioById(portfolioId);
        setPortfolios(portfolios.filter((portfolio) => portfolio._id !== portfolioId));
        toast.success("Portfolio deleted successfully!");
      } catch (error) {
        console.error("Error deleting portfolio:", error);
        toast.error("Failed to delete portfolio.");
      }
    }
  };

  const handleStatusChange = async (portfolioId) => {
    const portfolioToUpdate = portfolios.find((portfolio) => portfolio._id === portfolioId);

    if (!portfolioToUpdate) {
      console.error("Portfolio not found");
      return;
    }

    const newStatus = !portfolioToUpdate.status;
    const action = newStatus ? "activate" : "deactivate";
    const confirmed = window.confirm(
      `Are you sure you want to ${action} this portfolio? This action cannot be undone.`
    );

    if (confirmed) {
      try {
        await UpdatePortfolioStatus(portfolioId, newStatus);
        setPortfolios(
          portfolios.map((portfolio) =>
            portfolio._id === portfolioId ? { ...portfolio, status: newStatus } : portfolio
          )
        );
        toast.success(`Portfolio ${action}d successfully!`);
      } catch (error) {
        console.error("Error updating portfolio status:", error);
        toast.error("Failed to update portfolio status.");
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPortfolios = portfolios.filter((portfolio) => {
    return (
      portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPortfolios = filteredPortfolios.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">List of Portfolios</h1>
      </div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Portfolios List
            </li>
          </ol>
        </nav>
      </div>

      <div className="row display-flex">
        <div className="mb-3 col-md-6 text-left">
          <button
            onClick={() => navigate("/mainDashboard/addPortfolio")}
            className="btn btn-success"
          >
            Add Portfolio
          </button>
        </div>

        <div className="mb-3 col-md-6 text-right">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or description"
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
              <th style={{ padding: "25px" }}>TITLE</th>
              <th style={{ padding: "25px" }}>DESCRIPTION</th>
              <th style={{ padding: "25px" }}>STATUS</th>
              <th style={{ padding: "25px" }}>ACTIONS</th>
            </tr>
          </thead>
          {currentPortfolios.length === 0 ? (
            <tr className="text-muted">
              <td colSpan={6} className="text-center">
                No portfolios available.
              </td>
            </tr>
          ) : (
            <tbody>
              {currentPortfolios.map((portfolio, index) => (
                <tr key={portfolio._id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{portfolio.title}</td>
                  <td>{portfolio.description}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(portfolio._id)}
                      className={`btn btn-sm ${
                        portfolio.status ? "btn-warning" : "btn-secondary"
                      }`}
                    >
                      {portfolio.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button onClick={() => handleEdit(portfolio._id)} className="btn btn-primary btn-sm">Edit</button>
                      <button onClick={() => handleDelete(portfolio._id)} className="btn btn-danger btn-sm">Delete</button>
                      <button onClick={() => handleView(portfolio._id)} className="btn btn-info btn-sm">View</button>
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
            { length: Math.ceil(filteredPortfolios.length / itemsPerPage) },
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

export default ListPortfolios;
