import React from "react";
import "../../style/aboutushome.css";
const aboutushome = new URL("../images/about-us.jpg", import.meta.url).href;

const AboutUsHome = () => {
  return (
    <div className="about-section">
      <div id="shape1"></div>
      <div id="shape2"></div>

      <div className="about-section-left">
        <div className="about-section-img-container">
          <img
            className="about-section-img"
            title="About DKK Transport & Logistics"
            src={aboutushome}
            alt="DKK Transport & Logistics"
          />
        </div>
      </div>

      <div className="about-section-right">
        <h2>About Us</h2>

        <div className="about-section-img-container-below">
          <img
            className="about-section-img-below"
            title="About DKK Transport & Logistics"
            src={aboutushome}
            alt="DKK Transport & Logistics"
          />
        </div>

        <p>
          <span>D</span>KK Transport & Logistics is a trusted name in domestic
          transportation, committed to delivering goods safely, efficiently,
          and on time. With a strong focus on reliability and professionalism,
          we provide end-to-end transport solutions tailored to meet the needs
          of businesses across the region.
        </p>

        <p>
          Our experienced team, well-maintained fleet, and customer-first
          approach ensure smooth operations from pickup to final delivery.
          Whether it’s short-haul or long-distance transport, we handle every
          shipment with care, precision, and responsibility.
        </p>

       
      </div>
    </div>
  );
};

export default AboutUsHome;
