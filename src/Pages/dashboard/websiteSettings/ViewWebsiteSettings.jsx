import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetWebsiteSettingsById } from "../../../api/websiteSettings";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";

const ViewWebsiteSettings = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchWebsiteSettings = async () => {
      if (!id) {
        setError("Settings ID is not provided.");
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const result = await GetWebsiteSettingsById(id);
        if (result.success) {
          setSettings(result.settings);
        } else {
          setError("Failed to load website settings.");
        }
      } catch (error) {
        setError("Failed to load website settings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWebsiteSettings();
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

  if (!settings) {
    return <div>No website settings found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Website Settings Details</h1>
      <div className="mb-3 text-center">
        <button
          onClick={() => navigate("/mainDashboard/listWebsiteSettings")}
          className="btn btn-secondary"
          aria-label="Back to Website Settings List"
        >
          <FaArrowLeft className="me-2" />
          Back to Website Settings List
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
              <td>Website Name</td>
              <td>{settings.websiteName || "N/A"}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{settings.address || "N/A"}</td>
            </tr>
            <tr>
              <td>Office Phone</td>
              <td>{settings.officePhone || "N/A"}</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>{settings.mobile || "N/A"}</td>
            </tr>
            <tr>
              <td>Google Map Link</td>
              <td>
                {settings.googleMapLink ? (
                  <a
                    href={settings.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {settings.googleMapLink}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
            <tr>
              <td>Number of Products</td>
              <td>{settings.numberOfProducts || "N/A"}</td>
            </tr>
            <tr>
              <td>Number of Clients</td>
              <td>{settings.numberOfClients || "N/A"}</td>
            </tr>
            <tr>
              <td>Number of Employees</td>
              <td>{settings.numberOfEmployees || "N/A"}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{settings.email || "N/A"}</td>
            </tr>
            <tr>
              <td>Header Logo</td>
              <td>
                {settings.headerLogo ? (
                  <img
                    src={`${baseUrl}${settings.headerLogo}`}
                    alt="Header Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  "No header logo available."
                )}
              </td>
            </tr>
            <tr>
              <td>Footer Logo</td>
              <td>
                {settings.headerLogo ? (
                  <img
                    src={`${baseUrl}${settings.headerLogo}`}
                    alt="Header Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  "No header logo available."
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h5>Social Media Links</h5>
      {settings.socialMedia.length > 0 ? (
        <ul className="list-group">
          {settings.socialMedia.map((media, index) => (
            <li className="list-group-item" key={index}>
              <strong>{media.name}</strong>:{" "}
              <a href={media.link} target="_blank" rel="noopener noreferrer">
                {media.link}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No social media links available.</p>
      )}

      <h5>Menu Links</h5>
      {settings.menuLinks.length > 0 ? (
        <ul className="list-group">
          {settings.menuLinks.map((link, index) => (
            <li className="list-group-item" key={index}>
              <strong>{link.name}</strong>:{" "}
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.link}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu links available.</p>
      )}
    </div>
  );
};

export default ViewWebsiteSettings;
