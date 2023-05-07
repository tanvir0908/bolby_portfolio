import React, { useState } from "react";
import Menu from "./Menu";
import "./Portfolio.css";

export default function Portfolio() {
  const [items, setItems] = useState(Menu);
  function filterItem(category) {
    const filter = Menu.filter((element) => {
      return element.category === category;
    });
    setItems(filter);
  }

  return (
    <>
      <section className="work container section" id="work">
        <h2 className="section_title">Recent Works</h2>
        <div className="work_filters">
          <span className="work_item" onClick={() => setItems(Menu)}>Everything</span>
          <span className="work_item" onClick={() => filterItem("Creative")}>
            Creative
          </span>
          <span className="work_item" onClick={() => filterItem("Art")}>
            Art
          </span>
          <span className="work_item" onClick={() => filterItem("Design")}>
            Design
          </span>
          <span className="work_item" onClick={() => filterItem("Branding")}>
            Branding
          </span>
        </div>

        <div className="work_container grid">
          {items.map((element) => {
            const { id, image, title, category } = element;
            return (
              <div className="work_card" key={id}>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_image" />
                  <div className="work_mask"></div>
                </div>

                <span className="work_category">{category}</span>
                <h3 className="work_title">{title}</h3>
                <a href="https://www.google.com">
                  <i className="icon-link work_button_icon"></i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
