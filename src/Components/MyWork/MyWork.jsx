import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../Animate/Animate';

function MyWork() {
  return (
    <motion.div id="work" className="mywork section-fade-in" variants={staggerContainer(0.2, 0.1)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}>
      <motion.div className="mywork-title" variants={textVariant(0.5)}>
        <h1>Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </motion.div>

      <p className="mywork-subtitle">
        A snapshot of the projects I&apos;ve built while learning web and mobile development.
        Each one helped me practice clean structure, responsiveness, and problem solving.
      </p>

      <div className="mywork-grid">
        {mywork_data.map((work) => (
          <motion.article key={work.w_no} className="mywork-card" variants={fadeIn('up', 'tween', 0.2, 0.5)}>
            <img src={work.w_img} alt={work.w_name} />
            <div className="mywork-card-body">
              <div className="mywork-card-title-row">
                <h3 className="mywork-card-title">{work.w_name}</h3>
                <span className="mywork-chip">#{String(work.w_no).padStart(2, "0")}</span>
              </div>
              <p className="mywork-card-desc">{work.w_desc}</p>

              {work.w_tech && (
                <div className="mywork-tech">
                  {work.w_tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}

              <div className="mywork-links">
               
                <a
                  href={work.w_code || "#"}
                  target={work.w_code && work.w_code !== "#" ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <a
        className="mywork-showmore"
        href="https://github.com/methma490"
        target="_blank"
        rel="noreferrer"
      >
        <p>Show More On GitHub</p>
        <img src={arrow_icon} alt="arrow icon" />
      </a>
    </motion.div>
  );
}

export default MyWork;
