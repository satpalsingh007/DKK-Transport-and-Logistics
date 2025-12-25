import React, { useState, useEffect } from 'react';
import AboutUsHome from "./AboutUsHome";
import MovingText from "./MovingText";
import Testimonial from "./Testimonial";
const homepage1 = new URL("../images/homepage1.avif", import.meta.url).href;
const homepage2 = new URL("../images/homepage2.avif", import.meta.url).href;
const homepage3 = new URL("../images/homepage3.avif", import.meta.url).href;
const homepage4 = new URL("../images/homepage4.avif", import.meta.url).href;
export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: homepage1, heading: 'Fast & Reliable Delivery' },
    { image: homepage2, heading: 'Global Logistics Solutions' },
    { image: homepage3, heading: 'Trusted Transport Partner' },
    { image: homepage4, heading: 'Excellence in Service' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="homepage">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h1 className="slide-heading">{slide.heading}</h1>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>❮</button>
      <button className="next-btn" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>❯</button>
       {/* <p>DKK Transport and Logistics is your trusted partner in delivering excellence. With a commitment to reliability, efficiency, and customer satisfaction, we specialize in providing top-notch logistics solutions tailored to meet your unique needs. Our dedicated team works tirelessly to ensure your goods reach their destination safely and on time. Experience the DKK difference – where your logistics challenges are transformed into seamless solutions.</p> */}
        
       <div className="homepage-services">
        <div><i className="fa fa-truck" aria-hidden="true"></i><h2>Reliable Freight Delivery</h2> <p>From local shipments to long-distance freight, we ensure your goods are delivered safely and on time. Our fleet is maintained to the highest standards so you can trust us with every delivery.</p></div>
        <div><i className="fa fa-warehouse" aria-hidden="true"></i><h2>Secure Storage & Handling</h2> <p>We provide safe and organized storage solutions for your goods. Our facilities are monitored and designed for efficient handling, ensuring your products are protected until they reach their destination.</p></div>
        <div><i className="fa fa-hourglass-end" aria-hidden="true"></i> <h2>Fast & On-Time Services</h2> <p> Time is critical in transportation. Our experienced team and real-time tracking technology ensure your shipments arrive on schedule, minimizing delays and keeping your business running smoothly.</p></div>
      </div>
      <AboutUsHome />
    <MovingText/>
    <Testimonial/>
    <div className='homepage-bottom-banner'>
      <img src={homepage1} /> 
      <img src={homepage2} /> 
      <img src={homepage3} /> 
      <img src={homepage4} /> 
    </div>

    </div>
  );
}
