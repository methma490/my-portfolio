import React, { useState } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../Animate/Animate";

const skillsData = {
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Bootstrap", level: 70 },
  ],
  Backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "Java", level: 70 },
    { name: "Kotlin", level: 65 },
    { name: "C/C++", level: 70 },
  ],
  Mobile: [
    { name: "Android Studio", level: 75 },
    { name: "Kotlin", level: 70 },
    { name: "Mobile APIs", level: 65 },
  ],
  Database: [
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "SQL", level: 75 },
  ],
  Tools: [
    { name: "Git/GitHub", level: 80 },
    { name: "Postman", level: 75 },
    { name: "Figma", level: 65 },
    { name: "VS Code", level: 85 },
  ],
};

function About() {
  const [activeTab, setActiveTab] = useState("skills");
  const [activeSkillCategory, setActiveSkillCategory] = useState("Frontend");

  return (
    <div id="about" className="about">
      {/* TITLE */}
      <div className="about-title">
        <motion.h1
          variants={fadeIn("down", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left"></div>

        {/* RIGHT SECTION */}
        <motion.div
          className="about-right"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* ABOUT TEXT */}
          <motion.div
            className="about-para"
            variants={fadeIn("up", "tween", 0.2, 0.7)}
          >
            <p>
              I'm a Software Engineering undergraduate driven by creating
              intuitive user experiences and{" "}
              <strong>efficient full-stack solutions</strong>.
            </p>
            <p>
              From mobile apps to JavaScript-powered web systems, I continuously
              learn and build real-world projects.
            </p>
          </motion.div>

          {/* MAIN TABS */}
          <motion.div
            className="tab-title"
            variants={fadeIn("up", "spring", 0.2, 0.6)}
          >
            <p
              className={`tab-link ${
                activeTab === "skills" ? "active-link" : ""
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </p>

            <p
              className={`tab-link ${
                activeTab === "experience" ? "active-link" : ""
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </p>

            <p
              className={`tab-link ${
                activeTab === "education" ? "active-link" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </p>
          </motion.div>

          {/* TAB CONTENT */}
          <div className="tab-content">
            {/* SKILLS */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={fadeIn("up", "tween", 0.3, 0.8)}
                initial="hidden"
                animate="show"
              >
                <div className="about-tabs">
                  {Object.keys(skillsData).map((category) => (
                    <button
                      key={category}
                      className={`about-tab ${
                        activeSkillCategory === category ? "active" : ""
                      }`}
                      onClick={() => setActiveSkillCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="about-skills-list">
                  {skillsData[activeSkillCategory].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="about-skill"
                      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      <p>{skill.name}</p>

                      <div className="about-skill-bar">
                        <motion.div
                          className="about-skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>

                      <span>{skill.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (
              <motion.ul
                key="experience"
                className="about-experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <li>Developed full-stack applications using MERN Stack</li>
                <li>Built Android applications using Kotlin</li>
                <li>Designed MongoDB & MySQL database schemas</li>
                <li>Collaborated with teams using Git & GitHub</li>
                <li>Created responsive UI using Tailwind CSS</li>
              </motion.ul>
            )}

            {/* EDUCATION */}
            {activeTab === "education" && (
              <motion.ul
                key="education"
                className="about-education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <li>
                  <strong>BSc (Hons) in Information Technology at  SLIIT</strong> – 

                  <span className="sub-text">
                       Full-Stack, Mobile & Database Systems
                  </span>
                </li>

                <li>
                  <strong>Full Stack Development</strong> – 
                  <span className="sub-text">
                    MERN Stack, REST APIs, Git
                  </span>
                </li>
              </motion.ul>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
