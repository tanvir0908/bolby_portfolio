import React from "react";
import "./Services.css";
import image1 from "../../Assets/service-1.svg";
import image2 from "../../Assets/service-2.svg";
import image3 from "../../Assets/service-3.svg";

const data = [
  {
    id: 1,
    image: image1,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nam.",
  },
  {
    id: 2,
    image: image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nam.",
  },
  {
    id: 3,
    image: image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nam.",
  },
];

export default function Services() {
  return <>
  <section className="services container section" id="services">
    <h2 className="section_title">Services</h2>
    <div className="services_container grid">
      {data.map(({id, image, title, description})=>
      {
        return(
          <div className="services_card" key={id}>
            <img src={image} alt="" className="services_img" />
            <h3 className="services_title">{title}</h3>
            <p className="services_description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
  </>;
}
