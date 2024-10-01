import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddTestimonialApi } from "../../../api/testimonial";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";


const AddTestimonial = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    companyName:"",
    description: "",
    content: "",
  });

  const [file, setFile] = useState(null);
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
      setFile(e.target.files[0]); 
    }
  };


  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("companyName", formData.companyName);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    if (file) {
      formDataToSend.append("files", file);
    }

    try {
     const result =  await AddTestimonialApi(formDataToSend);
     if (result.success === false) {
      toast.error(result.message || "Failed to add testimonial");
    } else {
      toast.success("Testimonial added successfully!");
      setTimeout(() => {
        navigate("/mainDashboard/listTestimonials");
      }, 1000)



      setFormData({
        title: "",
        companyName: "",
        description: "",
        content: "",
      });
      setFile([]);
    }} catch (error) {
      toast.error("Failed to add testimonial");
      console.error("Failed to add testimonial:", error);
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
    <div className=" mt-5">
      <h1>Add Testimonial</h1>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/mainDashboard">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/mainDashboard/listCategory">Testimonial List</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Testimonial
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex">
        <div className="float-right">
          <button
            onClick={() => navigate("/mainDashboard/listTestimonials")}
            className="btn btn-dark"
          >
            <FaArrowLeft className="me-2" />
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>

      <div className="row d-flex">
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
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

        <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        </div>
      
        <div className="row d-flex">
        <div className="col-md-6 ">
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
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
        <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="fileUpload" className="form-label">Upload File</label>
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

          <div className="row ">
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

          <div className="row mt-2">
            <div className="col-md-6 text-center mb-2 mb-md-0">
              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </div>
            <div className="col-md-6 text-center">
              <button
                type="button"
                className="btn btn-outline-secondary w-100"
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

export default AddTestimonial;
