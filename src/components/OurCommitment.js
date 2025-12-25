import React from 'react';
const commitmentImage = new URL("../images/our-commitment.avif", import.meta.url).href;


function OurCommitment() {
  return (
    <div className="our-commitment">
      <div className="commitment-header">
        <h1>Our Commitment</h1>
        <p>Dedicated to excellence, safety, and sustainability in every aspect of our operations.</p>
      </div>
      <div className="commitment-content">
        <div className="commitment-image">
          <img src={commitmentImage} alt="Our Commitment to Quality and Sustainability" />
        </div>
        <section className="commitment-details">
          <h2>Quality Assurance</h2>
          <p>
            We are committed to maintaining the highest standards of quality in all our services. From rigorous training
            programs for our staff to advanced technology for tracking and managing shipments, we ensure that every
            delivery meets or exceeds customer expectations.
          </p>
          <h2>Safety First</h2>
          <p>
            Safety is at the core of everything we do. Our fleet undergoes regular maintenance, and our drivers are
            trained in defensive driving techniques. We adhere to all safety regulations to protect our team, our
            clients, and the communities we serve.
          </p>
          <h2>Sustainability</h2>
          <p>
            Environmental responsibility is a key part of our commitment. We invest in eco-friendly vehicles, optimize
            routes to reduce emissions, and participate in reforestation projects. Together, we are building a greener
            future for logistics.
          </p>
          <h2>Customer Satisfaction</h2>
          <p>
            Your satisfaction is our priority. We offer personalized service, transparent communication, and flexible
            solutions tailored to your needs. Our goal is to be your trusted partner in logistics.
          </p>
        </section>
      </div>
    </div>
  );
}

export default OurCommitment;