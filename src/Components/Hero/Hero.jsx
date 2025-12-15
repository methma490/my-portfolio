import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../Animate/Animate";

function Hero() {
  return (
    <motion.div
      id="home"
      className="hero section-fade-in"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="hero-left">
        <motion.p variants={textVariant(1.1)} className="hero-subtitle">
          Crafting Interfaces • Building Experiences • Creating Impact
        </motion.p>
        <motion.h1 variants={textVariant(1.2)}>
          <span>Hello, I'm Methma Sankalpani</span>
        </motion.h1>
        <p className="hero-tagline">
           Software Engineering undergraduate crafting clean interfaces and
          thoughtful user experiences.
        </p>

        <p className="hero-description">
          I enjoy turning ideas into reliable, user-friendly applications as I
          grow as a developer. From{" "}
          <span className="hero-highlight"> web apps</span> to
          <span className="hero-highlight"> Android projects </span>, I
          focus on clear structure, responsiveness, and writing code that is
          easy to maintain and scale.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>

          <div className="hero-resume">
            <a className="btn" href="/my-cv.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hero-right"
      >
        <img src={hero} alt="Portrait of Methma Sankalpani" />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
