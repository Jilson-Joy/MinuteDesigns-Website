import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GetBlogById,
  UpdateBlogById,
} from "../../../api/blog"; 
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "react-bootstrap";

const EditBlog = () => { 
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    comments: [""]
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState(formData.content);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const result = await GetBlogById(id); 
        const blogData = result.blog; 

        setFormData({
          title: blogData.title || "",
          description: blogData.description || "",
          content: blogData.content || "",
          comments: blogData.comments || [""],
        });
        setFiles(blogData.files || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
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

    files.forEach((file) => {
      formDataToSend.append("files", file);
    });
    
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    
    formDataToSend.append("comments", JSON.stringify(formData.comments));

    try {
      await UpdateBlogById(id, formDataToSend);
      toast.success("Blog updated successfully!");
      navigate("/mainDashboard/listBlogs"); 
    } catch (error) {
      console.error("Failed to update blog:", error);
      toast.error("Failed to update blog. Please try again.");
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

  if (loading) {
    return <div>Loading...</div>;
  }

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
    <div className="container">
      <h1 className="mt-4">Edit Blog</h1> 

      <form onSubmit={handleSubmit}>
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
            className="btn btn-secondary mt-2"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
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


      
   </div>
  );
};

export default EditBlog;