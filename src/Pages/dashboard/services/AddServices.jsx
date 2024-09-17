import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddServiceApi } from '../../../api/services';

const AddServices = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [formData, setFormData] = useState({
    pageUrl: '',
    pageTitle: '',
    name: '',
    shortDescription: '',
    description: '',
    content: '',
    meta: [
      {
        metaTitle: '',
        metaDescription: '',
        metaAuthor: '',
        metaKeywords: '',
      },
    ],
    metaTags: '',
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
            [metaField]: value, // Update the specific meta field
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

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSubmitting) return;  
  setIsSubmitting(true);    

  try {
    const result = await AddServiceApi({
      ...formData,
      meta: [
        {
          ...formData.meta[0],
          metaKeywords: formData.meta[0].metaKeywords.split(',').map(keyword => keyword.trim()),
        },
      ],
      metaTags: formData.metaTags.split(',').map(tag => tag.trim()),
    });

    if (result.success === false) {
      toast.error(result.message || 'Failed to add service');
    } else {
      toast.success('Service added successfully!');
      navigate("/mainDashboard/listServices");

      setFormData({
        pageUrl: '',
        pageTitle: '',
        name: '',
        shortDescription: '',
        description: '',
        content: '',
        meta: [
          {
            metaTitle: '',
            metaDescription: '',
            metaAuthor: '',
            metaKeywords: '',
          },
        ],
        metaTags: '',
      });
    }
  } catch (error) {
    toast.error("Failed to add service",error);
  } finally {
    setIsSubmitting(false); 
  }
};
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      ['link'],
      ['clean'],
      ['code-block'],
    ],
  };

  return (
    <div className="container">
      <h1 className="mt-4">Add Service</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="pageUrl" className="col-sm-2 col-form-label">Service URL</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="pageTitle" className="col-sm-2 col-form-label">Service Title</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="shortDescription" className="col-sm-2 col-form-label">Short Description</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="meta.metaTitle" className="col-sm-2 col-form-label">Meta Title</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="meta.metaDescription" className="col-sm-2 col-form-label">Meta Description</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="meta.metaAuthor" className="col-sm-2 col-form-label">Meta Author</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="meta.metaKeywords" className="col-sm-2 col-form-label">Meta Keywords (comma separated)</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="metaTags" className="col-sm-2 col-form-label">Meta Tags (comma separated)</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
          <div className="col-sm-10">
            <ReactQuill style={{marginLeft:"40px", width: "100%" , height:"300px"}}
              value={formData.content}
              onChange={handleContentChange}
              modules={modules} 
              placeholder="Write your content here..."
              required
            />
          </div>
        </div>

        {/* <div className="row mb-3">
          <label htmlFor="file" className="col-sm-2 col-form-label">File Upload</label>
          <div className="col-sm-10">
            <input style={{ marginLeft: "40px" }}
              type="file"
              className="form-control"
              id="file"
              name="file"
              onChange={handleChange}
            />
          </div>
        </div> */}


        <div className="row mb-3">
          <div className="col-sm-8 offset-sm-2">
          <button type="submit" style = {{marginLeft:"-20%"}}className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>

      <ToastContainer /> 
    </div>
  );
};

export default AddServices;
