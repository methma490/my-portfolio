import React from "react";
import "./Footer.css";
//import logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          {/*<img src={logo} alt="Methma personal logo" />*/}
        </div>

        <div className="footer-right">
          <p>Want to stay in touch or see what I&apos;m building next?</p>
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email (for your reference)" />
            <button
              type="button"
              className="footer-subscribe"
              onClick={() =>
                alert("This is a static portfolio. You can wire this up to a real newsletter later.")
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footerbottom-left">© 2025 Methma Sankalpani</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-tagline">Still learning. Still growing. 💻✨</p>
      </div>
    </footer>
  );
}

export default Footer;
