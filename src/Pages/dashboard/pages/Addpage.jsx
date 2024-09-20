import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { AddPageApi } from "../../../api/pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";

const AddPage = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState("");

  const [formData, setFormData] = useState({
    pageUrl: "",
    pageTitle: "",
    name: "",
    shortDescription: "",
    description: "",
    content: "",
    meta: [
      {
        metaTitle: "",
        metaDescription: "",
        metaAuthor: "",
        metaKeywords: "",
      },
    ],
    metaTags: "",
  });

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("meta.")) {
      const metaField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        meta: [
          {
            ...prevData.meta[0],
            [metaField]: value,
          },
        ],
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleContentChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      content,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    files.forEach((file) => {
      formDataToSend.append("files", file);
    });
    formDataToSend.append("pageUrl", formData.pageUrl);
    formDataToSend.append("pageTitle", formData.pageTitle);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("shortDescription", formData.shortDescription);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("metaTitle", formData.meta[0].metaTitle);
    formDataToSend.append("metaDescription", formData.meta[0].metaDescription);
    formDataToSend.append("metaAuthor", formData.meta[0].metaAuthor);
    formDataToSend.append(
      "metaKeywords",
      formData.meta[0].metaKeywords.split(",").map((keyword) => keyword.trim())
    );
    formDataToSend.append(
      "metaTags",
      formData.metaTags.split(",").map((tag) => tag.trim())
    );

    try {
      const result = await AddPageApi(formDataToSend);

      if (result.success === false) {
        toast.error(result.message || "Failed to add page");
      } else {
        toast.success("Page added successfully!");
        navigate("/mainDashboard/listPage");

        setFormData({
          pageUrl: "",
          pageTitle: "",
          name: "",
          shortDescription: "",
          description: "",
          content: "",
          meta: [
            {
              metaTitle: "",
              metaDescription: "",
              metaAuthor: "",
              metaKeywords: "",
            },
          ],
          metaTags: "",
        });
        setFiles([]);
      }
    } catch (error) {
      toast.error("Failed to add page", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="pageUrl" className="form-label">
            Page URL
          </label>
          <input
            type="text"
            className="form-control"
            id="pageUrl"
            name="pageUrl"
            value={formData.pageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pageTitle" className="form-label">
            Page Title
          </label>
          <input
            type="text"
            className="form-control"
            id="pageTitle"
            name="pageTitle"
            value={formData.pageTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="shortDescription" className="form-label">
            Short Description
          </label>
          <input
            type="text"
            className="form-control"
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
          />
        </div>

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

        <div className="mb-3">
          <label htmlFor="meta.metaTitle" className="form-label">
            Meta Title
          </label>
          <input
            type="text"
            className="form-control"
            id="meta.metaTitle"
            name="meta.metaTitle"
            value={formData.meta[0].metaTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="meta.metaDescription" className="form-label">
            Meta Description
          </label>
          <input
            type="text"
            className="form-control"
            id="meta.metaDescription"
            name="meta.metaDescription"
            value={formData.meta[0].metaDescription}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="meta.metaAuthor" className="form-label">
            Meta Author
          </label>
          <input
            type="text"
            className="form-control"
            id="meta.metaAuthor"
            name="meta.metaAuthor"
            value={formData.meta[0].metaAuthor}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="meta.metaKeywords" className="form-label">
            Meta Keywords (comma separated)
          </label>
          <input
            type="text"
            className="form-control"
            id="meta.metaKeywords"
            name="meta.metaKeywords"
            value={formData.meta[0].metaKeywords}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="metaTags" className="form-label">
            Meta Tags (comma separated)
          </label>
          <input
            type="text"
            className="form-control"
            id="metaTags"
            name="metaTags"
            value={formData.metaTags}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <ReactQuill
            value={formData.content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            placeholder="Write your content here..."
            style={{ height: "300px" }}
          />
        </div>
        <div className="mb-3">
          <button
            style={{ width: "150px", marginLeft: "110%", marginTop: "-80px" }}
            type="button"
            className="btn btn-secondary"
            onClick={handleSourceCode}
          >
            Code
          </button>
        </div>

        <div className="mb-3">
          <button
            style={{ marginLeft: "-28%" }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
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

export default AddPage;
