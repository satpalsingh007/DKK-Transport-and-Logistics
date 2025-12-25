import React from 'react';

const roadFreightImage = new URL("../images/roadFreightImage.avif", import.meta.url).href;

function RoadFreight() {
  return (
    <div className="road-freight">
      <div className="freight-header">
        <h1>Road Freight Services</h1>
        <p>Efficient, reliable, and cost-effective road transportation solutions for your cargo.</p>
      </div>
      <div className="freight-content">
        <div className="freight-image">
          <img src={roadFreightImage} alt="Road Freight Services" />
        </div>
        <section className="freight-details">
          <h2>Why Choose Our Road Freight?</h2>
          <ul>
            <li><strong>Wide Coverage:</strong> Extensive network covering major highways and routes across the country.</li>
            <li><strong>Timely Deliveries:</strong> GPS tracking and optimized routes ensure on-time arrivals.</li>
            <li><strong>Flexible Options:</strong> Full truckload (FTL), less than truckload (LTL), and specialized cargo handling.</li>
            <li><strong>Safe and Secure:</strong> Experienced drivers and well-maintained vehicles for maximum safety.</li>
            <li><strong>Cost-Effective:</strong> Competitive pricing with no hidden fees.</li>
          </ul>
          <h2>Our Fleet</h2>
          <p>
            Our modern fleet includes refrigerated trucks, flatbed trailers, and hazardous material carriers,
            equipped to handle a variety of goods from perishables to industrial equipment.
          </p>
          <h2>Get a Quote</h2>
          <p>
            Contact us today to discuss your road freight needs and receive a customized quote.
          </p>
          <p>Email: dkktransport@yahoo.comm | Phone: +61 431-730-804</p>
        </section>
      </div>
    </div>
  );
}

export default RoadFreight;