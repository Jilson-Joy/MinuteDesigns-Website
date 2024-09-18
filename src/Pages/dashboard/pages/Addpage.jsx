import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { AddPageApi } from "../../../api/pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddPage = () => {
  const navigate = useNavigate();

const [files, setFiles] = useState([]);
 const handleFileChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };
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
  
 
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
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
      <h1 className="mt-4">Add Page</h1>

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
              required
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
              required
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
          <label htmlFor="meta.metaTitle" className="col-sm-2 col-form-label">
            Meta Title
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="meta.metaTitle"
              name="meta.metaTitle"
              value={formData.meta[0].metaTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="meta.metaDescription" className="col-sm-2 col-form-label">
            Meta Description
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="meta.metaDescription"
              name="meta.metaDescription"
              value={formData.meta[0].metaDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="meta.metaAuthor" className="col-sm-2 col-form-label">
            Meta Author
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="meta.metaAuthor"
              name="meta.metaAuthor"
              value={formData.meta[0].metaAuthor}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="meta.metaKeywords" className="col-sm-2 col-form-label">
            Meta Keywords (comma separated)
          </label>
          <div className="col-sm-10">
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              className="form-control"
              id="meta.metaKeywords"
              name="meta.metaKeywords"
              value={formData.meta[0].metaKeywords}
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

        <div className="mb-4">
          <label htmlFor="content" className="form-label">Content</label>
          <ReactQuill style={{marginLeft:"120px", marginTop:"-30px", width: "100%" , height:"300px"}}
            id="content"
            value={formData.content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
          />
        </div>

     
      
        <div className="row mb-3">
          <div className="col-sm-8 offset-sm-2">
            <button
              type="submit"
              style={{ marginLeft: "-20%" }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddPage;
