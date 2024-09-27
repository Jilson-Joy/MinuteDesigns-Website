import React, { useEffect, useState } from "react";
import { listAllBlogs } from "../../api/frontendApis/pagesApi";
import "./Blog.css";

function Blog() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await listAllBlogs();
        console.log("Fetched Blogs:", data);
        if (data && Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-start mt-5">Recent Blog</h1>
      </div>

      {/* Recent blog */}
      <div className="blog mt-5 mb-5">
          <div className="blog_box row">
            {Array.isArray(blogs) && blogs.length > 0 ? (
              blogs
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 1)
                .map((item) => (
                  <div key={item._id} className="blog_item col-md-12">
                    <div className="blog_img col-md-6">
                      <img
                        src={`${API_BASE_URL}${item.imageUrl}`}
                        alt={item.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text col-md-6">
                      <h1 className="blog_title">{item.title}</h1>
                      <p className="blog_des">
                        {item.description}
                      </p>
                      <p className="blog_date">{formatDate(item.createdAt)}</p>
                    </div>
                  </div>
                ))
            ) : (
              <p>No blogs available</p>
            )}
          </div>
        

      </div>

      <hr />

      {/* Old blogs */}
      <div className="container mt-5 mb-5">
        <div className="old_blog row">
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((item) => (
              <div key={item._id} className="old_blog_item col-md-6">
                <div className="old_blog_img">
                  <img
                    src={`${API_BASE_URL}${item.imageUrl}`}
                  // alt={item.title}
                  />
                </div>
                <div className="old_blog_text">
                  <h3>{item.title}</h3>
                  <p>{formatDate(item.createdAt)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
