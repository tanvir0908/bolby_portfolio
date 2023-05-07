import React from "react";
import "./About.css";
import AboutBox from "../About/AboutBox";
import aboutAvatar from "../../Assets/avatar-2.svg";

export default function About() {
  return (
    <div>
      <section className="about container section" id="about">
        <h2 className="section_title">About Me</h2>
        <div className="about_container grid">
          <img src={aboutAvatar} alt="" className="about_image" />
          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum velit deserunt nesciunt! Culpa ut consectetur non
                sequi magnam, fugiat adipisci.
              </p>
              <a href="www.google.com" className="btn">
                Download Resume
              </a>
            </div>
            <div className="about_skills grid">
              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">Development</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div class="level">
                  <div class="mylevel development"></div>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">UI / UX Design</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div class="level">
                  <div class="mylevel design"></div>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">Photography</h3>
                  <span className="skills_number">60%</span>
                </div>
                <div class="level">
                  <div class="mylevel photography"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutBox />
      </section>
    </div>
  );
}
