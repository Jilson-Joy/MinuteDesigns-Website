import { useState, useEffect } from 'react';
import { DeletePageById, GetAllPages, UpdatePageStatus } from '../../../api/pages'; 
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListPages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const result = await GetAllPages(1, 10); 
        setPages(result.pages);
      } catch (error) {
        console.error('Error fetching pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  const handleEdit = (pageId) => {
    navigate(`/mainDashboard/edit-page/${pageId}`);
  };

  const handleDelete = async (pageId) => {
    const confirmed = window.confirm('Are you sure you want to delete this page? This action cannot be undone.');
    if (confirmed) {
      try {
        await DeletePageById(pageId); 
        setPages(pages.filter(page => page._id !== pageId));
      } catch (error) {
        console.error('Error deleting page:', error);
      }
    }
  };

  const handleStatusChange = async (pageId) => {
    const pageToUpdate = pages.find(page => page._id === pageId);
    
    if (!pageToUpdate) {
      console.error('Page not found');
      return;
    }

    const newStatus = !pageToUpdate.status;   
    const action = newStatus ? 'activate' : 'deactivate';
    const confirmed = window.confirm(`Are you sure you want to ${action} this page? This action cannot be undone.`);
    
    if (confirmed) {
      try {
        await UpdatePageStatus(pageId, newStatus);
        setPages(pages.map(page => page._id === pageId ? { ...page, status: newStatus } : page));
      } catch (error) {
        console.error('Error updating page status:', error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedPage(null); 
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h1 className="mt-4">List of Pages</h1>
      {pages.length === 0 ? (
        <p>No pages available.</p> 
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Page URL</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th> 
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Change Status</th> 
            </tr>
          </thead>
          <tbody>
            {pages.map((page, index) => (
              <tr key={page._id}>
                <td>{index + 1}</td> 
                <td>{page.pageCode}</td> 
                <td>{page.name}</td>
                <td>{page.pageTitle}</td> 
                <td>{page.pageUrl}</td> 
                <td>{page.shortDescription}</td> 
                <td>{page.status ? 'Active' : 'Inactive'}</td> 
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
                    {page.status ? 'Active' : 'Deactive'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedPage && (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row mb-3">
                  <label className="col-sm-3">Page URL</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.pageUrl}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Page Title</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.pageTitle}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Name</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.name}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Short Description</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.shortDescription}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <p>{selectedPage.description}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-3">Content</label>
                  <div className="col-sm-9">
                    <div dangerouslySetInnerHTML={{ __html: selectedPage.content }} />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>}
    </div>
  );
}

export default ListPages;
