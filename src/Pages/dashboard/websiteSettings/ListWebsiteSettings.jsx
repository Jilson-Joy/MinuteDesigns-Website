import { useState, useEffect } from "react";
import {
  DeleteWebsiteSettingsById,
  GetAllWebsiteSettings,
  UpdateWebsiteSettingsStatus,
} from "../../../api/websiteSettings";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListWebsiteSettings() {
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSetting, setSelectedSetting] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const result = await GetAllWebsiteSettings();
        setSettings(result.settings);
      } catch (error) {
        console.error("Error fetching settings:", error);
        toast.error("Failed to load website settings.");
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleEdit = (id) => {
    navigate(`/mainDashboard/edit-website-settings/${id}`);
  };

  const handleDelete = async (settingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this website setting? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await DeleteWebsiteSettingsById(settingId);
        setSettings(settings.filter((setting) => setting._id !== settingId));
        toast.success("Website setting deleted successfully!");
      } catch (error) {
        console.error("Error deleting website setting:", error);
        toast.error("Failed to delete website setting.");
      }
    }
  };

  const handleStatusChange = async (settingId) => {
    const settingToUpdate = settings.find(
      (setting) => setting._id === settingId
    );

    if (!settingToUpdate) {
      console.error("Website setting not found");
      return;
    }

    const newStatus = !settingToUpdate.status;
    const action = newStatus ? "activate" : "deactivate";
    const confirmed = window.confirm(
      `Are you sure you want to ${action} this website setting? This action cannot be undone.`
    );

    if (confirmed) {
      try {
        await UpdateWebsiteSettingsStatus(settingId, newStatus);
        setSettings(
          settings.map((setting) =>
            setting._id === settingId
              ? { ...setting, status: newStatus }
              : setting
          )
        );
        toast.success(`Website setting ${action}d successfully!`);
      } catch (error) {
        console.error("Error updating website setting status:", error);
        toast.error("Failed to update website setting status.");
      }
    }
  };

  const handleView = (setting) => {
    setSelectedSetting(setting);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSetting(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredSettings = settings.filter((setting) => {
    return (
      setting.websiteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      setting.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSettings = filteredSettings.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">List of Website Settings</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/mainDashboard">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Website Settings List
          </li>
        </ol>
      </nav>

      <div className="row display-flex">
        <div className="mb-3 col-md-6 text-left">
          <button
            onClick={() => navigate("/mainDashboard/addWebsiteSettings")}
            className="btn btn-success"
          >
            Add Website Settings
          </button>
        </div>

        <div className="mb-3 col-md-6 text-right">
          <input
            type="text"
            className="form-control"
            placeholder="Search by website name or email"
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
              <th style={{ padding: "25px" }}>Website Name</th>
              <th style={{ padding: "25px" }}>Email</th>
              <th style={{ padding: "25px" }}>Office Phone</th>
              <th style={{ padding: "25px" }}>Address</th>
              <th style={{ padding: "25px" }}>Mobile</th>
              <th style={{ padding: "25px" }}>Status</th>
              <th style={{ padding: "25px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentSettings.length === 0 ? (
              <tr className="text-muted">
                <td colSpan={8} className="text-center">
                  No website settings available.
                </td>
              </tr>
            ) : (
              currentSettings.map((setting, index) => (
                <tr key={setting._id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{setting.websiteName}</td>
                  <td>{setting.email}</td>
                  <td>{setting.officePhone}</td>
                  <td>{setting.address}</td>
                  <td>{setting.mobile}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(setting._id)}
                      className={`btn btn-sm ${
                        setting.status ? "btn-warning" : "btn-secondary"
                      }`}
                    >
                      {setting.status ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleEdit(setting._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(setting._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleView(setting)}
                        className="btn btn-info btn-sm"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination justify-content-center">
          {Array.from(
            { length: Math.ceil(filteredSettings.length / itemsPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
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

      {showModal && selectedSetting && (
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Website Settings Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <strong>Website Name: </strong> {selectedSetting.websiteName}
                </div>
                <div className="mb-3">
                  <strong>Address: </strong> {selectedSetting.address}
                </div>
                <div className="mb-3">
                  <strong>Office Phone: </strong> {selectedSetting.officePhone}
                </div>
                <div className="mb-3">
                  <strong>Mobile: </strong> {selectedSetting.mobile}
                </div>
                <div className="mb-3">
                  <strong>Email: </strong> {selectedSetting.email}
                </div>
                <div className="mb-3">
                  <strong>Google Map Link: </strong>
                  <a
                    href={selectedSetting.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Map
                  </a>
                </div>
                <div className="mb-3">
                  <strong>Number of Products: </strong>{" "}
                  {selectedSetting.numberOfProducts}
                </div>
                <div className="mb-3">
                  <strong>Number of Clients: </strong>{" "}
                  {selectedSetting.numberOfClients}
                </div>
                <div className="mb-3">
                  <strong>Number of Employees: </strong>{" "}
                  {selectedSetting.numberOfEmployees}
                </div>
                <div className="mb-3">
                  <strong>Status: </strong>{" "}
                  {selectedSetting.status ? "Active" : "Inactive"}
                </div>
                <div className="mb-3">
                  <strong>Created At: </strong>{" "}
                  {new Date(selectedSetting.createdAt).toLocaleString()}
                </div>
                <div className="mb-3">
                  <strong>Updated At: </strong>{" "}
                  {new Date(selectedSetting.updatedAt).toLocaleString()}
                </div>

                <div className="mb-3">
                  <strong>Social Media Links:</strong>
                  <ul>
                    {selectedSetting.socialMedia.map((media) => (
                      <li key={media._id}>
                        <strong>{media.name}: </strong>
                        <a
                          href={media.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {media.link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <strong>Menu Links:</strong>
                  <ul>
                    {selectedSetting.menuLinks.map((link) => (
                      <li key={link.code}>
                        <strong>{link.name}: </strong>
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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

export default ListWebsiteSettings;
