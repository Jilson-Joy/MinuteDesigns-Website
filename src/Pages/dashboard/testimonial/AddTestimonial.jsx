import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill'; // Import React Quill
import 'react-quill/dist/quill.snow.css'; // Import styles for React Quill
import { AddTestimonialApi } from '../../../api/testimonial';

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
   
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
      AddTestimonialApi(formData);
      setFormData({
        title: '',
        description: '',
        content: '',
      });
    } catch (error) {
      console.error("Failed to add testimonial:", error);
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
      <h1 className="mt-4">Add Testimonial</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">title</label>
          <div className="col-sm-10">
            <input style={{marginLeft:"40px"}}
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
          <label htmlFor="description" className="col-sm-2 col-form-label">description</label>
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

export default AddTestimonial;
