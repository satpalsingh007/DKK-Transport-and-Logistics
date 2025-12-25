const logo = new URL("../images/logo.png", import.meta.url).href;
const movingtruck = new URL("../images/moving-truck.gif", import.meta.url).href;
import { Link } from "react-router-dom";
const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-top">
        <h4>YOUR CARGO &nbsp;&nbsp; OUR RESPONSIBILITY</h4>
        <h3>Delivering your goods safely, on time, every time — with care you can trust.</h3>
        <div>Contact Us Today</div>
      </div>
      <div className="footer-mid-second">
        <div className="footer-mid-second-left">
          <div className="footer-logo">
            <img src={logo} alt="DKK Logo" />
          </div>
          <div className="footer-truck">
            <img src={movingtruck} alt="Moving Truck" />
          </div>
        </div>
        <div className="footer-mid-second-right">
          <div className="footer-mid-second-quick">
            <h3>Quick links</h3>
            <Link to={'/'} className="footer-links" onClick={() => { window.scrollTo(0, 0);}}>Home</Link>
            <Link to={'/our-company'} className="footer-links" onClick={() => { window.scrollTo(0, 0);}}>Our Company</Link>
            <Link to={'/our-commitment'} className="footer-links" onClick={() => { window.scrollTo(0, 0);}}>Our Commitment</Link>
            <Link to={'/faq'} className="footer-links" onClick={() => { window.scrollTo(0, 0);}}>FAQs</Link>
          </div>
          <div className="footer-mid-second-contact">
            <h3>Contact Us</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              &nbsp; &nbsp;+61 431-730-804
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>{" "}
              &nbsp; &nbsp;dkktransport@yahoo.com
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>{" "}
              &nbsp; &nbsp;280 Flinders Street, Townsville <br/> &nbsp; &nbsp;Queensland Australia <br/> &nbsp; &nbsp;and <br/> &nbsp; &nbsp; 93 Roberts crescent Bellbird park  <br/> &nbsp; &nbsp; 4300 Brisbane Queensland Australia
            </div>
          </div>
          <div className="footer-mid-second-quick">
            <h3>Services</h3>
            <Link to={'/road-freight'} className="footer-links" onClick={() => { window.scrollTo(0, 0);}}>Road Freight</Link>
            <Link to={'/express-delivery'} className="footer-links" onClick={() => { window.scrollTo(0, 0);}}>Express Delivery</Link>
            <Link to={'/storage-warehouse'} className="footer-links" onClick={() => { window.scrollTo(0, 0);}}>Storage & Warehouse</Link>
          </div>
        </div>
      </div>
      <div className="footer-end">
        © 2025 DKK Transport and Logistics. All Rights Reserved.
      </div>
    </footer>
  )
}
export default Footer;