import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 
import { AddPageApi } from '../../../api/pages';

const AddPage = () => {
  const [formData, setFormData] = useState({
    pageUrl: '',
    pageTitle: '',
    name: '',
    shortDescription: '',
    description: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    metaAuthor: '',
    metaKeywords: '',
    metaTags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await AddPageApi(formData);
      console.log("Page added successfully:", result);
      setFormData({
        pageUrl: '',
        pageTitle: '',
        name: '',
        shortDescription: '',
        description: '',
        content: '',
        metaTitle: '',
        metaDescription: '',
        metaAuthor: '',
        metaKeywords: '',
        metaTags: '',
      });
    } catch (error) {
      console.error("Failed to add page:", error);
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
      <h1 className="mt-4">Add Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="pageUrl" className="col-sm-2 col-form-label">Page URL</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="pageTitle" className="col-sm-2 col-form-label">Page Title</label>
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
          <label htmlFor="metaTitle" className="col-sm-2 col-form-label">Meta Title</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
              type="text"
              className="form-control"
              id="metaTitle"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaDescription" className="col-sm-2 col-form-label">Meta Description</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
              type="text"
              className="form-control"
              id="metaDescription"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaAuthor" className="col-sm-2 col-form-label">Meta Author</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
              type="text"
              className="form-control"
              id="metaAuthor"
              name="metaAuthor"
              value={formData.metaAuthor}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="metaKeywords" className="col-sm-2 col-form-label">Meta Keywords (comma separated)</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
              type="text"
              className="form-control"
              id="metaKeywords"
              name="metaKeywords"
              value={formData.metaKeywords}
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
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-8 offset-sm-2">
            <button type="submit" style = {{marginLeft:"-20%"}}className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
