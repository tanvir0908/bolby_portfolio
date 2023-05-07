import React from "react";
import "./Blog.css";

import image1 from "../../Assets/blog-1.svg";
import image2 from "../../Assets/blog-2.svg";
import image3 from "../../Assets/blog-3.svg";

export default function Blog() {
  return (
    <>
      <section className="blog container section" id="blog">
        <h2 className="section_title">Latest Posts</h2>
        <div className="blog_container grid">
          <div className="blog_card">
            <div className="blog_thumb">
              <a href="google">
                <span className="blog_category">Reviews</span>
              </a>
              <a href="google">
                <img src={image1} alt="" className="blog_img" />
              </a>
            </div>
            <div className="blog_details">
              <h3 className="blog_title">
                5 Best App Development Tools for Your Projects
              </h3>
              <div className="blog_meta">
                <span>09 February, 2022</span>
                <span className="blog_dot">.</span>
                <span>Tanvir</span>
              </div>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_thumb">
              <a href="google">
                <span className="blog_category">Business</span>
              </a>
              <a href="google">
                <img src={image2} alt="" className="blog_img" />
              </a>
            </div>
            <div className="blog_details">
              <h3 className="blog_title">
                3 Things to know about startup business
              </h3>
              <div className="blog_meta">
                <span>05 February, 2022</span>
                <span className="blog_dot">.</span>
                <span>Tanvir</span>
              </div>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_thumb">
              <a href="google">
                <span className="blog_category">Tutorial</span>
              </a>
              <a href="google">
                <img src={image3} alt="" className="blog_img" />
              </a>
            </div>
            <div className="blog_details">
              <h3 className="blog_title">
                Common Misconceptions About Payment
              </h3>
              <div className="blog_meta">
                <span>07 February, 2022</span>
                <span className="blog_dot">.</span>
                <span>Tanvir</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
