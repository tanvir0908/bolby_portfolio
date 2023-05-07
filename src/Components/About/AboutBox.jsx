import React from "react";

export default function AboutBox() {
  return (
    <>
      <div className="about_boxes grid">
        <div className="about_box">
          <div className="about_icon icon-fire"></div>
          <div>
            <h3 className="about_title">198</h3>
            <span className="about_subtitle">Project Completed</span>
          </div>
        </div>
        <div className="about_box">
          <div className="about_icon icon-cup"></div>
          <div>
            <h3 className="about_title">5670</h3>
            <span className="about_subtitle">Cup of Coffee</span>
          </div>
        </div>
        <div className="about_box">
          <div className="about_icon icon-people"></div>
          <div>
            <h3 className="about_title">427</h3>
            <span className="about_subtitle">Satisfied Clients</span>
          </div>
        </div>
        <div className="about_box">
          <div className="about_icon icon-badge"></div>
          <div>
            <h3 className="about_title">35</h3>
            <span className="about_subtitle">Nominees Winner</span>
          </div>
        </div>
      </div>
    </>
  );
}
