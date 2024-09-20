import React from "react";
import "./Blog.css";
function Blog() {
  return (
    <div className="container">
      <div>
        <h1 className="text-start mt-5"> Recent Blog</h1>
      </div>
      {/* recent blog */}
      <div className="blog  mt-5 mb-5">
        <div className=" blog_box row">
          <div className=" blog_img col-md-6">
            <img
              src="https://i.pinimg.com/564x/06/d7/16/06d716a7723f18cc0351a47177fd78be.jpg"
              alt=""
            />
          </div>
          <div className="blog_text col-md-6">
            <h1>The Power of Great Website Design</h1>
            <p className="blog_des">
              "The Power of Great Website Design" emphasizes the critical role a
              well-designed website plays in attracting and engaging users,
              fostering trust, and driving business success. A visually
              appealing, user-friendly interface can elevate your brand and
              enhance user experiences.
            </p>
            <p>July 8, 2024 . 2 min read </p>
          </div>
        </div>
      </div>
      <hr />
      {/* old blogs */}
      <div className="container mt-5 nb-5">
        <div className="old_blog row">
          <div className="old_blog_img col-md-6">
            <img
              src="https://cdn.dribbble.com/userupload/16603679/file/original-7e2eff166e68ebc9a0de13766673a4cf.jpg?resize=752x"
              alt=""
            />
          </div>
          <div className="old_blog_text col-md-6">
            <h3>The Power of Great Website Design</h3>

            <p>July 8, 2024 . 2 min read </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 nb-5">
        <div className="old_blog row">
          <div className="old_blog_img col-md-6">
            <img
              src="https://cdn.dribbble.com/userupload/12565902/file/original-20384902f5cdadf5c3c2582661354d9a.png?resize=752x"
              alt=""
            />
          </div>
          <div className="old_blog_text col-md-6">
            <h3>The Power of Great Website Design</h3>

            <p>July 8, 2024 . 2 min read </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
