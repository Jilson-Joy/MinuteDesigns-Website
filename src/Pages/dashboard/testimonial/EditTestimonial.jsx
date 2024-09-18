import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetTestimonialById, UpdateTestimonialById } from "../../../api/testimonial";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditTestimonialData = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const result = await GetTestimonialById(id);
        const testimonialData = result.testimonial; // Adjust based on your API response

        setFormData({
          title: testimonialData.title || "",
          description: testimonialData.description || "",
          content: testimonialData.content || "",
        });
        setFiles(testimonialData.files || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
        setLoading(false);
      }
    };

    fetchTestimonialData();
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

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      ["link"],
      ["clean"],
      ["code-block"],
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    files.forEach((file) => {
      formDataToSend.append("files", file);
    });
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);

    try {
      await UpdateTestimonialById(id, formDataToSend);
      toast.success("Testimonial updated successfully!");
      navigate("/mainDashboard/listTestimonials");
    } catch (error) {
      console.error("Failed to update testimonial:", error);
      toast.error("Failed to update testimonial. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">Edit Testimonial</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
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
          <div className="col-sm-10" style={{ paddingLeft: "50px" }}>
            <ReactQuill
              style={{ width: "100%", height: "300px" }}
              value={formData.content}
              onChange={handleContentChange}
              modules={modules}
              placeholder="Write your content here..."
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Update Testimonial
            </button>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EditTestimonialData;
