import React from "react";
import "./Pricing.css";
import image1 from "../../Assets/price-1.svg";
import image2 from "../../Assets/price-2.svg";
import image3 from "../../Assets/price-3.svg";

export default function Pricing() {
  return (
    <>
      <section className="pricing container section">
        <h2 className="section_title">Pricing Plans</h2>

        <div className="pricing_container grid">
          <div className="pricing_item">
            <img src={image1} alt="" className="pricing_img" />
            <h3 className="pricing_plan">Basic</h3>
            <p className="pricing_title">
              A Simple option but powerful to manage your business
            </p>
            <p className="pricing_support">Email support</p>
            <h3 className="price">
              <em>$</em>9<span>Month</span>
            </h3>
            <a href="a" className="btn">
              Get Started
            </a>
          </div>
          <div className="pricing_item best">
            <span className="badge">Recommended</span>
            <img src={image2} alt="" className="pricing_img" />
            <h3 className="pricing_plan">Premium</h3>
            <p className="pricing_title">
              Unlimited product including app integration and more features
            </p>
            <p className="pricing_support">Mon-Fri support</p>
            <h3 className="price">
              <em>$</em>49<span>Month</span>
            </h3>
            <a href="a" className="btn">
              Get Started
            </a>
          </div>
          <div className="pricing_item">
            <img src={image3} alt="" className="pricing_img" />
            <h3 className="pricing_plan">Ultimate</h3>
            <p className="pricing_title">
              A wise option for large companies and individuals
            </p>
            <p className="pricing_support">24/7 support</p>
            <h3 className="price">
              <em>$</em>99<span>Month</span>
            </h3>
            <a href="a" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
