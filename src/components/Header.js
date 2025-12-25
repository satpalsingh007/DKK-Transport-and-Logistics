import React, { useState } from "react";
import { Link } from "react-router-dom";

// import logo from "../images/logo.png"; 
const logo = new URL("../images/logo.png", import.meta.url).href;
const flag = new URL("../images/Australiaflag.gif", import.meta.url).href;
const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "about" | "services" | null

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const handleDropdown = (name) => {
    // For desktop: open on hover handled in CSS
    // For mobile: toggle on click
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Close mobile menu when a link is clicked
  const closeMobile = () => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="dkk-header">
      <div className="dkk-header-inner">
        {/* Logo */}
        <Link to={'/'} className="dkk-logo" onClick={() => { window.scrollTo(0, 0);}}>
          <img src={logo} alt="DKK Transport & Logistics" />
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className="dkk-nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          onClick={toggleMobile}
        >
          <span className="dkk-nav-toggle-bar" />
          <span className="dkk-nav-toggle-bar" />
          <span className="dkk-nav-toggle-bar" />
        </button>

        {/* Navigation */}
        <nav
          className={`dkk-nav ${isMobileOpen ? "dkk-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="dkk-nav-list">
            <li className="dkk-nav-item">
              <Link to={'/'} onClick={closeMobile}>
                Home
              </Link>
            </li>

            {/* About Us with dropdown */}
            <li
              className={`dkk-nav-item dkk-nav-item--has-dropdown ${
                openDropdown === "about" ? "dkk-nav-item--open" : ""
              }`}
            >
              <div
                className="dkk-nav-link-dropdown"
                onClick={() => handleDropdown("about")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "about"}
              >
                About Us
                <span className="dkk-nav-caret">▾</span>
              </div>
              <ul className="dkk-dropdown">
                <li>
                  <Link  to={'/our-company'} onClick={closeMobile}>
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link to={'/our-commitment'} onClick={closeMobile}>
                    Our Commitment
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services with dropdown */}
            <li
              className={`dkk-nav-item dkk-nav-item--has-dropdown ${
                openDropdown === "services" ? "dkk-nav-item--open" : ""
              }`}
            >
              <div
                className="dkk-nav-link-dropdown"
                onClick={() => handleDropdown("services")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "services"}
              >
                Services
                <span className="dkk-nav-caret">▾</span>
              </div>
              <ul className="dkk-dropdown">
                <li>
                  <Link to={'/road-freight'} onClick={closeMobile}>
                    Road Freight
                  </Link>
                </li>
                <li>
                  <Link to={'/express-delivery'} onClick={closeMobile}>
                    Express Delivery
                  </Link>
                </li>
                <li>
                  <Link to={'/storage-warehouse'} onClick={closeMobile}>
                    Storage & Warehousing
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dkk-nav-item">
              <Link to={'/faq'} onClick={closeMobile}>
                FAQs
              </Link>
            </li>

            <li className="dkk-nav-item">
              <Link to={'/contact-us'} onClick={closeMobile}>
                Contact Us
              </Link>
            </li>
            <img src={flag} alt="Australia Flag" style={{ height: '5vw', marginLeft: '10px', alignSelf: 'center' }} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
