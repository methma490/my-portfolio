import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "063384aa-72a0-4e44-bea8-b7d8d6355dae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Email Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className="contact section-fade-in"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className="contact-title" variants={titleVariants}>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Pattern" />
      </motion.div>

      <div className="contact-section">
        {/* LEFT SIDE */}
        <motion.div className="contact-left" variants={leftVariants}>
          <h1>Let's Talk</h1>
          <p>
            Hey there! I'm currently an undergraduate passionate about tech and
            learning every day. If you have any questions, collaboration ideas,
            or just want to say hi — feel free to reach out. I’m always open to
            connect!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>methmagk@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+743301490</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Kandegoda, Gonapinuwala, Galle</p>
            </div>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/methmagk74490/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/methma490"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://facebook.com/share/16dd9i71f6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com/methu.02?igsh=aDBtdGo5ajVibGRs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.form
          className="contact-right"
          onSubmit={onSubmit}
          variants={rightVariants}
        >
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
          <p className="form-result">{result}</p>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
