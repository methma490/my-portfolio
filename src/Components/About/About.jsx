import React, { useState } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../Animate/Animate';


const skills = [
  { name: "React", level: 80 },
  { name: "MERN Stack", level: 75 },
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "Next.js", level: 65 },
];

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <motion.div id='about' className="about section-fade-in" variants={staggerContainer(0.2, 0.1)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
        
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m an Information Technology undergraduate who loves crafting
              user-friendly interfaces, solving real-world problems, and
              exploring the tech universe—from JavaScript to React, from
              localhost to deployment. I’m not just building projects; I’m
              building <strong>better versions of myself</strong> with every
              line of code.
            </p>
            <p>
              <em>"Sometimes quiet, sometimes chaos. But always driven."</em>
            </p>
          </div>

          {/* Tabs */}
          <div className="tab-title">
            <p
              className={`tab-link  ${activeTab === "skills" ? "active-link" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </p>
            <p
              className={`tab-link  ${activeTab === "experience" ? "active-link" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </p>
            <p
              className={`tab-link ${activeTab === "education" ? "active-link" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </p>
          </div>

          {/* Tab Content */}
          <div className="tab-content active-tab">
            {activeTab === "skills" && (
              <div className="about-skills-list">
                {skills.map((skill) => (
                  <motion.div key={skill.name} className="about-skill" variants={fadeIn('up', 'tween', 0.3, 0.6)}>
                    <p>{skill.name}</p>
                    <div className="about-skill-bar">
                      <motion.div
                        className="about-skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                    <span className="about-skill-percent">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "experience" && (
              <ul>
                <li>Building personal and academic projects with React and MERN</li>
                <li>Working on university coursework, group projects, and self-learning</li>
              </ul>
            )}

            {activeTab === "education" && (
              <ul>
                <li>BSc (Hons) in Information Technology – SLIIT</li>
                <li>Full Stack Bootcamp – Udemy / Self-learning</li>
              </ul>
            )}
          </div>
        </div>
      </div>

   
    </motion.div>
  );
}

export default About;
