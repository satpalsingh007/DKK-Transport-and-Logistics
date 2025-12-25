import React from 'react';

const roadFreightImage = new URL("../images/expressDeliveryImage.avif", import.meta.url).href;

function ExpressDelivery() {
  return (
    <div className="road-freight">
      <div className="freight-header">
        <h1>Express Delivery Services</h1>
        <p>Fast, secure, and time-critical delivery solutions when speed matters most.</p>
      </div>

      <div className="freight-content">
        <div className="freight-image">
          <img src={roadFreightImage} alt="Express Delivery Services" />
        </div>

        <section className="freight-details">
          <h2>Why Choose Our Express Delivery?</h2>
          <ul>
            <li><strong>Time-Critical Shipments:</strong> Designed for urgent and same-day deliveries.</li>
            <li><strong>Direct Routes:</strong> Minimal handling and optimized routes to reduce transit time.</li>
            <li><strong>Flexible Capacity:</strong> From small parcels to urgent palletized freight.</li>
            <li><strong>Real-Time Updates:</strong> Continuous communication for delivery status.</li>
            <li><strong>Reliable & Secure:</strong> Dedicated vehicles and professional drivers ensure safe delivery.</li>
          </ul>

          <h2>Our Express Fleet</h2>
          <p>
            Our express fleet consists of dedicated vans and trucks equipped to handle
            urgent consignments, ensuring fast turnaround times without compromising safety.
          </p>

          <h2>Get a Quote</h2>
          <p>
            Need a fast and dependable delivery? Contact us today to arrange express transport
            tailored to your deadline.
          </p>
          <p>Email: dkktransport@yahoo.com | Phone: +61 431-730-804</p>
        </section>
      </div>
    </div>
  );
}

export default ExpressDelivery;
