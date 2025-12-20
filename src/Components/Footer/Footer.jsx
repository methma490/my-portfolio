// Footer.jsx
import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Thanks for your interest! Email saved: ${email}`);
      setEmail("");
    } else {
      alert("Please enter your email address");
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: "🔗", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Email", icon: "✉️", url: "#" }
  ];

  return (
    <footer className="footer">
      <div className="gradient-overlay"></div>
      
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top-section">
          <div className="footer-left-column">
            <h3 className="footer-brand-name">Methma Sankalpani</h3>
            <p className="footer-tagline">Building digital experiences, one line at a time</p>
          
          </div>

          <div className="footer-right-column">
            <h4 className="footer-newsletter-title">Stay Connected</h4>
            <p className="footer-newsletter-text">
              Get notified about new projects, blog posts, and tech insights
            </p>
            <div className="footer-email-wrapper">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-email-input"
                onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button
                onClick={handleSubscribe}
                className="footer-subscribe-button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom-section">
          <div className="footer-bottom-left">
            <p className="footer-copyright">© 2025 Methma Sankalpani</p>
            <p className="footer-subtext">Crafted with 💚 and ☕</p>
          </div>

          <nav className="footer-nav">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="footer-nav-link"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="footer-quote">Still learning. Still growing. 💻✨</p>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="footer-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="footer-particle"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;