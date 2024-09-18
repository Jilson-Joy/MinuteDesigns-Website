import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetPageById, UpdatePageById } from "../../../api/pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState("");

  const [formData, setFormData] = useState({
    pageUrl: "",
    pageTitle: "",
    name: "",
    shortDescription: "",
    description: "",
    content: "",
    meta: {
      metaTitle: "",
      metaDescription: "",
      metaAuthor: "",
      metaKeywords: "",
    },
    metaTags: "",
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const result = await GetPageById(id);
        const pageData = result.page;

        setFormData({
          pageUrl: pageData.pageUrl || "",
          pageTitle: pageData.pageTitle || "",
          name: pageData.name || "",
          shortDescription: pageData.shortDescription || "",
          description: pageData.description || "",
          content: pageData.content || "",
          meta: {
            metaTitle: pageData.meta?.metaTitle || "",
            metaDescription: pageData.meta?.metaDescription || "",
            metaAuthor: pageData.meta?.metaAuthor || "",
            metaKeywords: pageData.meta?.metaKeywords || "",
          },
          metaTags: pageData.metaTags || "",
        });
        setFiles(pageData.files || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching page data:", error);
        setLoading(false);
      }
    };

    fetchPageData();
  }, [id]);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("meta.")) {
      setFormData((prevData) => ({
        ...prevData,
        meta: {
          ...prevData.meta,
          [name.replace("meta.", "")]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleContentChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value,
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
    formDataToSend.append("metaTitle", formData.meta.metaTitle);
    formDataToSend.append("metaDescription", formData.meta.metaDescription);
    formDataToSend.append("metaAuthor", formData.meta.metaAuthor);
    formDataToSend.append(
      "metaKeywords",
      formData.meta.metaKeywords.split(",").map((keyword) => keyword.trim())
    );

    const metaTags =
      typeof formData.metaTags === "string" ? formData.metaTags : "";
    formDataToSend.append(
      "metaTags",
      metaTags.split(",").map((tag) => tag.trim())
    );

    try {
      await UpdatePageById(id, formDataToSend);
      toast.success("Page updated successfully!");
      navigate("/mainDashboard/listPage");
    } catch (error) {
      console.error("Failed to update page:", error);
      toast.error("Failed to update page. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">Edit Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="pageUrl" className="col-sm-2 col-form-label">
            Page URL
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="pageUrl"
              name="pageUrl"
              value={formData.pageUrl}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="pageTitle" className="col-sm-2 col-form-label">
            Page Title
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="pageTitle"
              name="pageTitle"
              value={formData.pageTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="shortDescription" className="col-sm-2 col-form-label">
            Short Description
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="shortDescription"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="fileUpload">Upload Files</label>
          <input
            style={{ marginLeft: "40px" }}
            type="file"
            className="form-control"
            name="files"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="metaTitle" className="col-sm-2 col-form-label">
            Meta Title
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaTitle"
              name="meta.metaTitle"
              value={formData.meta.metaTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaDescription" className="col-sm-2 col-form-label">
            Meta Description
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaDescription"
              name="meta.metaDescription"
              value={formData.meta.metaDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaAuthor" className="col-sm-2 col-form-label">
            Meta Author
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaAuthor"
              name="meta.metaAuthor"
              value={formData.meta.metaAuthor}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaKeywords" className="col-sm-2 col-form-label">
            Meta Keywords (comma separated)
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaKeywords"
              name="meta.metaKeywords"
              value={formData.meta.metaKeywords}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaTags" className="col-sm-2 col-form-label">
            Meta Tags (comma separated)
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="metaTags"
              name="metaTags"
              value={formData.metaTags}
              onChange={handleChange}
            />
          </div>
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
          <div className="row mb-3">
            <div className="col-sm-8 offset-sm-2">
              <button
                style={{
                  width: "150px",
                  marginLeft: "200%",
                  marginTop: "-80px",
                }}
                type="button"
                className="btn btn-secondary mt-2"
                onClick={handleSourceCode}
              >
                Source Code
              </button>
            </div>
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

export default EditPage;
