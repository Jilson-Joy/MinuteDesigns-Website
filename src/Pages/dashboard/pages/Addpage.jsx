import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { AddPageApi } from "../../../api/pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
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
    meta: {
      metaTitle: "",
      metaDescription: "",
      metaAuthor: "",
      metaKeywords: "",
    },
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
        meta: {
          ...prevData.meta,
          [metaField]: value,
        },
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

    const metaArray = [
      {
        metaTitle: formData.meta.metaTitle,
        metaDescription: formData.meta.metaDescription,
        metaAuthor: formData.meta.metaAuthor,
        metaKeywords: formData.meta.metaKeywords
          .split(",")
          .map((keyword) => keyword.trim()),
      },
    ];

    metaArray.forEach((meta, index) => {
      Object.keys(meta).forEach((key) => {
        formDataToSend.append(`meta[${index}][${key}]`, meta[key]);
      });
    });

    const tags = formData.metaTags.split(",").map((tag) => tag.trim());
    tags.forEach((tag, index) => {
      formDataToSend.append(`metaTags`, tag);
    });

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
          meta: {
            metaTitle: "",
            metaDescription: "",
            metaAuthor: "",
            metaKeywords: "",
          },
          metaTags: "",
        });
        setFiles([]);
      }
    } catch (error) {
      toast.error("Failed to add page", error);
    }
  };

  return (
    <>
      {/* <div className="container mt-4" > */}
      {/* <div className="page-title">
          <h3>Add Page </h3>
        </div> */}

      {/* breadcrumb */}
      {/* <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/mainDashboard">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/mainDashboard/listPage">Page List</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Page
              </li>
            </ol>
          </nav>
        </div> */}

      {/* <div className="d-flex">
          <div className="float-right">
            <button
              onClick={() => navigate("/mainDashboard/listPage")}
              className="btn btn-dark"
            >
              <FaArrowLeft className="me-2" />
            </button>
          </div>
        </div> */}

      {/* <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            <div className="col-row d-flex">
              <div className="col-md-12 m-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 m-2">
                <label htmlFor="shortDescription" className="form-label">
                  Short Description
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-row d-flex ">
              <div className="col-md-12 m-2">
                <label htmlFor="pageTitle" className="form-label">
                  Page Title
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="pageTitle"
                  name="pageTitle"
                  value={formData.pageTitle}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-row d-flex ">
              <div className="col-md-12 m-2">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-row d-flex ">
              <div className="col-md-12 m-2">
                <label htmlFor="pageUrl" className="form-label">
                  Page URL
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="pageUrl"
                  name="pageUrl"
                  value={formData.pageUrl}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-12 m-2">
                <label htmlFor="fileUpload" className="form-label">
                  Upload File
                </label>
                <input
                  type="file"
                  className="form-control clsinp"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="col-row d-flex ">
              <div className="col-md-12 m-2">
                <label htmlFor="meta.metaTitle" className="form-label">
                  Meta Title
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="meta.metaTitle"
                  name="meta.metaTitle"
                  value={formData.meta.metaTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 m-2">
                <label htmlFor="meta.metaAuthor" className="form-label">
                  Meta Author
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="meta.metaAuthor"
                  name="meta.metaAuthor"
                  value={formData.meta.metaAuthor}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-row d-flex ">
              <div className="col-md-12 m-2">
                <label htmlFor="meta.metaKeywords" className="form-label">
                  Meta Keywords
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="meta.metaKeywords"
                  name="meta.metaKeywords"
                  value={formData.meta.metaKeywords}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 m-2">
                <label htmlFor="metaTags" className="form-label">
                  Meta Tags (comma separated)
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="metaTags"
                  name="metaTags"
                  value={formData.metaTags}
                  onChange={handleChange}
                />
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
                  onClick={() => navigate("/mainDashboard/listPage")}
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
                className="form-control clsinp"
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

          <ToastContainer />
        </div> */}
      {/* </div> */}

      {/* fhfghhhhhhhhhhhhh */}
      <div className="mt-5" >
        <div className="page-title">
          <h3>Add Page </h3>
        </div>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/mainDashboard">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/mainDashboard/listPage">Page List</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Page
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
        <div>
          <form onSubmit={handleSubmit}>
            <div className="row mt-2">
              <div className="col-md-6">
                <label htmlFor="">Name</label>
                <input type="text"
                  className="form-control clsinp"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required />
              </div>
              <div className="col-md-6">
                <label htmlFor="pageTitle" className="form-label">
                  Page Title
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="pageTitle"
                  name="pageTitle"
                  value={formData.pageTitle}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <label htmlFor="shortDescription" className="form-label">
                  Short Description
                </label>
                <textarea
                  type="text"
                  className="form-control clsinp"
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control clsinp"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <label htmlFor="pageUrl" className="form-label">
                  Page URL
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="pageUrl"
                  name="pageUrl"
                  value={formData.pageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="fileUpload" className="form-label">
                  Upload File
                </label>
                <input
                  type="file"
                  className="form-control clsinp"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
            </div>


            <div className="row mt-2">
              <div className="col-md-6">
                <label htmlFor="meta.metaTitle" className="form-label">
                  Meta Title
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="meta.metaTitle"
                  name="meta.metaTitle"
                  value={formData.meta.metaTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="meta.metaAuthor" className="form-label">
                  Meta Author
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="meta.metaAuthor"
                  name="meta.metaAuthor"
                  value={formData.meta.metaAuthor}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <label htmlFor="meta.metaKeywords" className="form-label">
                  Meta Keywords
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="meta.metaKeywords"
                  name="meta.metaKeywords"
                  value={formData.meta.metaKeywords}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="metaTags" className="form-label">
                  Meta Tags (comma separated)
                </label>
                <input
                  type="text"
                  className="form-control clsinp"
                  id="metaTags"
                  name="metaTags"
                  value={formData.metaTags}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
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
            <div className="row mt-2">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-secondary "
                  onClick={handleSourceCode}
                >
                  Source Code
                </button>
              </div>

            </div>
            <div className="row mt-2 ">
              <div className="col-md-6">
                <button type="submit" className="btn btn-dark ">
                  Submit
                </button>
              </div>

              <div  className="col-md-6">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/mainDashboard/listPage")}
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
                className="form-control clsinp"
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
          <ToastContainer />

        </div>
      </div>

    </>

  );
};

export default AddPage;
