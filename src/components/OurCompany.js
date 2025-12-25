import 'font-awesome/css/font-awesome.min.css';
const ourcompanyimage = new URL("../images/our-company.avif", import.meta.url).href;
function OurCompany() {
  return (
    <div className="our-company">
      <div className="company-header">
        <h1>About DKK Transport and Logistics</h1>
        <p>Your trusted partner in efficient and reliable transportation solutions.</p>
      </div>
      <div className='company-image-container'>
      <img src={ourcompanyimage} alt="Our Company" className="company-image" />
      </div>
      <div className="company-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At DKK Transport and Logistics, our mission is to provide seamless, cost-effective, and sustainable logistics services
            that connect businesses and communities worldwide. We are committed to excellence, safety, and innovation in every
            shipment we handle.
          </p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Road Freight</li>
            <li>Air Cargo</li>
            <li>Sea Shipping</li>
            <li>Warehousing and Distribution</li>
            <li>Customs Clearance</li>
            <li>Supply Chain Management</li>
          </ul>
        </section>
        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
           <div className='item-container'>
            <div className="item">
              <span className="icon feature_box_col"><i className="fa fa-handshake"></i></span>
              <h6>Reliability</h6>
              <p>On-time deliveries with real-time tracking.</p>
            </div>
            <div className="item">
              <span className="icon feature_box_col"><i className="fa fa-clock"></i></span>
              <h6>24 x 7 User Support</h6>
              <p>If our customer has any problem or query, we are always happy to help.</p>
            </div>
            <div className="item">
              <span className="icon feature_box_col"><i className="fa fa-hand-peace"></i></span>
              <h6>Expertise</h6>
              <p>Years of experience in diverse industries.</p>
            </div>
          </div>
        </section>
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>Get in touch for a quote or more information.</p>
          <p>Email: dkktransport@yahoo.com</p>
          <p>Phone:    +61 431-730-804</p>
        </section>
      </div>
    </div>
  );
}

export default OurCompany;