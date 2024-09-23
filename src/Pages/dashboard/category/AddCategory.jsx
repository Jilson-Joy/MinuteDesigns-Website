import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCategoryApi } from "../../../api/category";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";

const AddCategory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    videoUrl: "",
    description: "",
    content: "",
  });

  const [files, setFiles] = useState([]);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    files.forEach((file) => {
      formDataToSend.append("files", file);
    });

    formDataToSend.append("categoryName", formData.categoryName);
    formDataToSend.append("videoUrl", formData.videoUrl);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);

    try {
      await AddCategoryApi(formDataToSend);
      toast.success("Category added successfully!");
      navigate("/mainDashboard/listCategory");

      setFormData({
        categoryName: "",
        videoUrl: "",
        description: "",
        content: "",
      });
      setFiles([]);
    } catch (error) {
      console.error("Failed to add category:", error);
      toast.error("Error adding category.");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mt-4">Add Category</h1>

      <form onSubmit={handleSubmit}>
        <div className="col-row d-flex ">
          <div className="col-md-12 m-2">
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-row d-flex ">
          <div className="col-md-12 m-2">
            <div className="mb-3">
              <label htmlFor="videoUrl" className="col-sm-2 col-form-label">
                Video URL
              </label>
              <input
                type="url"
                className="form-control"
                id="videoUrl"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleChange}
                placeholder="https://example.com/video"
              />
            </div>
          </div>
        </div>

        <div className="col-row d-flex ">
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
              onClick={() => navigate("/mainDashboard/listServices")}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      <Modal show={showSourceModal} onHide={() => setShowSourceModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Code</Modal.Title>
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
          <Button variant="secondary" onClick={() => setShowSourceModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveSourceCode}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCategory;
