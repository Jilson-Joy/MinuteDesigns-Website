import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetCategoryById, UpdateCategoryById } from "../../../api/category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    videoUrl: "",
    content: "",
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const result = await GetCategoryById(id);
        const categoryData = result.category;

        setFormData({
          categoryName: categoryData.categoryName || "",
          videoUrl: categoryData.videoUrl || "",
          content: categoryData.content || "",
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    files.forEach((file) => {
      formDataToSend.append("files", file);
    });

    formDataToSend.append("categoryName", formData.categoryName);
    formDataToSend.append("videoUrl", formData.videoUrl);
    formDataToSend.append("content", formData.content);

    try {
      await UpdateCategoryById(id, formDataToSend);

      toast.success("Category updated successfully!");
      navigate("/mainDashboard/listCategory");
    } catch (error) {
      console.error("Failed to update category:", error);
      toast.error("Failed to update category. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">Edit Category</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="categoryName" className="col-sm-2 col-form-label">
            Category Name
          </label>
          <div className="col-sm-10">
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

        <div className="row mb-3">
          <label htmlFor="videoUrl" className="col-sm-2 col-form-label">
            Video URL
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="https://example.com/video"
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="fileUpload">Upload File</label>
          <input
            type="file"
            className="form-control"
            name="files"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="content" className="col-sm-2 col-form-label">
            Content
          </label>
          <div className="col-sm-10">
            <div className="quill-container" style={{ position: "relative" }}>
              <ReactQuill
                style={{ marginLeft: "40px", width: "100%", height: "300px" }}
                value={formData.content}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                placeholder="Write your content here..."
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-8 offset-sm-2">
            <button
              style={{ width: "150px", marginLeft: "200%", marginTop: "-80px" }}
              type="button"
              className="btn btn-secondary mt-2"
              onClick={handleSourceCode}
            >
              Source Code
            </button>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button
              type="submit"
              style={{ marginLeft: "-20%" }}
              className="btn btn-primary"
            >
              Update
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
          <Button variant="secondary" onClick={() => setShowSourceModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveSourceCode}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default EditCategory;
