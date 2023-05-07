import React from "react";
import "./Home.css";
import Me from "../../Assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

export default function Home() {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home_image" />
          <h1 className="home_name">Bolby Doe</h1>
          <span className="home_education">I'm a Front-End Engineer</span>
          <HeaderSocials />
          <a href="#contact" className="btn">
            Hire Me
          </a>
          <ScrollDown />
        </div>
        <Shapes />
      </section>
    </>
  );
}
