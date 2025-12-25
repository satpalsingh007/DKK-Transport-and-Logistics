import React, { useState } from "react";

const questionMarks = new URL("../images/question-marks.png", import.meta.url).href;

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="process">
      <div className="process__container">
        <div className="process__intro intro">
          <h2 className="process__title title">FAQs </h2>
          <div className="process__text text">
          Your Questions, Our Expertise – Clear Answers for Every Home Upgrade.
          </div>
          <img src={questionMarks}/>
        </div>
        <div className="process__accordions">
          <ul className="accordions__list">
            {[...Array(5)].map((_, index) => {
              const isOpen = openIndex === index;
              const titles = [
                "What transport services does DKK Transport & Logistics offer?",
                "Which areas do you provide your services in?",
                "Do you offer express and time-critical deliveries?",
                "How do you ensure the safety of goods during transport?",
                "Why should I choose DKK Transport & Logistics?",
              ];
              const descriptions = [
                "We provide road freight, express delivery, linehaul, long-haul transport, and storage & warehousing solutions. Our services are tailored to meet the needs of businesses of all sizes.",
                "We provide transport services across Far North Queensland, Brisbane, and interstate locations, ensuring reliable coverage for both regional and long-distance freight movements.",
                "Yes, we specialize in express and time-critical deliveries. Our dedicated vehicles and experienced drivers ensure urgent consignments are delivered safely and on time.",
                "We follow strict safety procedures, use secure load handling methods, and maintain our fleet regularly. Our trained drivers ensure your goods are protected throughout the journey.",
                "We stand out for our reliability, flexible solutions, competitive pricing, and customer-focused approach. Every shipment is handled with care, professionalism, and efficiency.",
              ];
              return (
                <li
                  key={index}
                  className={`accordions__item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="accordions__control"
                    aria-expanded={isOpen}
                    onClick={() => handleAccordionClick(index)}
                  >
                    <span className="accordions__number">{`0${
                      index + 1
                    }`}</span>
                    <span className="accordions__title">{titles[index]}</span>
                    <span className="accordions__icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="accordions__content text"
                    aria-hidden={!isOpen}
                  >
                    <p>{descriptions[index]}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
