import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetPageById, UpdatePageById } from "../../../api/pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pageUrl: '',
    pageTitle: '',
    name: '',
    shortDescription: '',
    description: '',
    content: '',
    meta: {
      metaTitle: '',
      metaDescription: '',
      metaAuthor: '',
      metaKeywords: '',
    },
    metaTags: '',
  });

  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching page data:", error);
        setLoading(false);
      }
    };

    fetchPageData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('meta.')) {
      setFormData(prevData => ({
        ...prevData,
        meta: {
          ...prevData.meta,
          [name.replace('meta.', '')]: value,
        },
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
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
    try {
      const result = await UpdatePageById(id, formData);
      console.log("Page updated successfully:", result);

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

  const handleContentChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      content: value,
    }));
  };

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
            <ReactQuill
              style={{ marginLeft: "80px", width: "200%", height: "150%" }}
              value={formData.content}
              onChange={handleContentChange}
              modules={modules}
              placeholder="Write your content here..."
            />
          </div>
        </div>

    

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-0">
            <button type="submit" className="btn btn-primary">
              Update Page
            </button>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EditPage;
