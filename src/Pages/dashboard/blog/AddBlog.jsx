import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddBlogApi } from "../../../api/blog";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const AddBlog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    comments: [""],
  });

  const [files, setFiles] = useState([]);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState(formData.content);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleCommentChange = (index, value) => {
    const updatedComments = [...formData.comments];
    updatedComments[index] = value;
    setFormData({
      ...formData,
      comments: updatedComments,
    });
  };

  const handleAddComment = () => {
    setFormData({
      ...formData,
      comments: [...formData.comments, ""],
    });
  };

  const handleRemoveComment = (index) => {
    const updatedComments = formData.comments.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      comments: updatedComments,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("comments", JSON.stringify(formData.comments));

    files.forEach((file) => {
      formDataToSend.append("files", file);
    });

    try {
      await AddBlogApi(formDataToSend);
      toast.success("Blog added successfully!");
      navigate("/mainDashboard/listBlogs");
      setFormData({
        title: "",
        description: "",
        content: "",
        comments: [""],
      });
      setFiles([]);
    } catch (error) {
      toast.error("Failed to add blog");
      console.error("Failed to add blog:", error);
    }
  };

  const handleSourceCode = () => {
    setShowSourceModal(true);
    setSourceCode(formData.content);
  };

  const handleSaveSourceCode = () => {
    setFormData({
      ...formData,
      content: sourceCode,
    });
    setShowSourceModal(false);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="container mt-4">
      <div className="page-title">
        <h3>Add Blog </h3>
      </div>
      {/* breadcrumb */}
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/mainDashboard/listBlogs">Blog List</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Blog
            </li>
          </ol>
        </nav>
      </div>

      <div className="d-flex">
        <div className="float-right">
          <button
            onClick={() => navigate("/mainDashboard/listPage")}
            className="btn btn-dark"
          >
            <FaArrowLeft className="me-2" />
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="col-row d-flex">
            <div className="col-md-12 m-2">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-12 m-2">
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-row d-flex">
          <div className="col-md-12 m-2">
          <div className="mb-3">
            <label htmlFor="fileUpload" className="form-label">
              Upload File
            </label>
            <input
              type="file"
              className="form-control"
              name="files"
              multiple
              onChange={handleFileChange}
            />
          </div>
          </div>
          </div>
          <div className="col-row d-flex">
          <div className="col-md-12 m-2">
          <div className="mb-3">
            <label className="form-label">Comments</label>
            {formData.comments.map((comment, index) => (
              <div key={index} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Comment ${index + 1}`}
                  value={comment}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemoveComment(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={handleAddComment}
            >             + Add Comment
            </button>
          </div>
          </div>
          </div>

          <div className="col-row d-flex mt-5">
            <div className="col-md-12 m-2">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <div className="cls-editor">
                <ReactQuill
                  value={formData.content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
                  placeholder="Write your content here..."
                  style={{
                    minwidth: "500px",
                    height: "300px",
                    overflow: "auto",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-row d-flex">
            <div className="col-md-12 m-2">
              <button
                type="button"
                className="btn btn-secondary "
                onClick={handleSourceCode}
              >
                Source Code
              </button>
            </div>
          </div>

          <div className="col-row d-flex mt-5">
            <div className="col-md-4 m-2">
              <button type="submit" className="btn btn-dark mr-1">
                Submit
              </button>
            </div>
            <div className="col-md-4 m-2">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => navigate("/mainDashboard/listBlogs")}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>

        <Modal show={showSourceModal} onHide={() => setShowSourceModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Source Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              rows="10"
              className="form-control"
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowSourceModal(false)}
            >
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveSourceCode}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AddBlog;
