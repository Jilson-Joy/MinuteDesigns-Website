import React from "react";
import "./Blog.css";
function Blog() {
  return (
    <div className="container">
      <div className="blog">
        <div className=" blog_box row mt-5 ">
          <div className=" blog_img col-md-6">
            <img
              src="https://i.pinimg.com/564x/06/d7/16/06d716a7723f18cc0351a47177fd78be.jpg"
              alt=""
            />
          </div>
          <div className="blog_text col-md-6">
            <h1 >The Power of Great Website Design</h1>
            <p className="blog_des">
              "The Power of Great Website Design" emphasizes the critical role a
              well-designed website plays in attracting and engaging users,
              fostering trust, and driving business success. A visually
              appealing, user-friendly interface can elevate your brand and
              enhance user experiences.
            </p>
            <p>July 8, 2024 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
