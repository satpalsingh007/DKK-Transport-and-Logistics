const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h1>Contact Us</h1>
          <p>Get in touch with DKK Transport & Logistics. We're here to help with all your transportation and logistics needs.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-info-grid">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Address</h3>
                <p>280 Flinders Street, Townsville<br />
               Queensland Australia<br />
               and<br />
                93 Roberts crescent Bellbird park<br />
                 4300 Brisbane Queensland Australia</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Phone</h3>
                <p>+61 431-730-804<br />
                <span className="emergency-note">24/7 Emergency Support Available</span></p>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h3>Email</h3>
                <p>dkktransport@yahoo.com</p>
              </div>

              
            </div>
          </div>

          <div className="location-section">
            <div className="location-content">
              <div className="location-details">
                

                

                <div className="contact-cta">
                  <h3>Ready to Get Started?</h3>
                  <p>Contact us today to discuss your transportation and logistics needs. Our team is ready to provide customized solutions for your business.</p>
                  <div className="cta-buttons">
                    <a href="tel:+15551234567" className="cta-btn primary">Call Now</a>
                    <a href="mailto:info@dkktransport.com" className="cta-btn secondary">Send Email</a>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
