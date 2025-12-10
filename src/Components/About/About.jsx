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

        {/* RIGHT SECTION WITH STAGGER */}
        <motion.div
          className="about-right"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* ABOUT PARAGRAPHS */}
          <motion.div
            className="about-para"
            variants={fadeIn("up", "tween", 0.2, 0.7)}
          >
            <p>
              I'm a Software Engineering undergraduate driven by creating
              intuitive user experiences and
              <strong>efficient full-stack solutions</strong>. I enjoy
              transforming ideas into polished, functional applications.
            </p>

            <p>
              From Kotlin-based mobile apps to JavaScript-powered web systems, I
              continuously refine my skills, learn new tools, and build projects
              that balance performance and usability.
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
          <motion.div
            className="tab-content active-tab"
            variants={fadeIn("up", "tween", 0.3, 0.8)}
          >
            {/* SKILLS TAB */}
            {activeTab === "skills" && (
              <>
                {/* Skill Category Pills */}
                <motion.div
                  className="about-tabs"
                  variants={fadeIn("up", "tween", 0.2, 0.7)}
                >
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
                </motion.div>

                {/* Skills List */}
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
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>

                      <span className="about-skill-percent">
                        {skill.level}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === "experience" && (
              <motion.ul
                className="about-experience"
                variants={fadeIn("up", "tween", 0.2, 0.7)}
              >
                <li>Developed full-stack web applications using MERN Stack</li>
                <li>Built Android mobile applications with Kotlin</li>
                <li>
                  Designed database schemas for MongoDB and MySQL projects
                </li>
                <li>Collaborated on group projects using Git & GitHub</li>
                <li>Created responsive UI/UX with Figma & Tailwind CSS</li>
              </motion.ul>
            )}

            {/* EDUCATION TAB */}
            {activeTab === "education" && (
              <motion.ul
                className="about-education"
                variants={fadeIn("up", "tween", 0.2, 0.7)}
              >
                <li>
                  <strong>BSc (Hons) in Information Technology</strong> – SLIIT
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "#9ca3af",
                      marginTop: "4px",
                    }}
                  >
                    Focus: Full-Stack Development, Mobile Development, Database
                    Systems
                  </span>
                </li>

                <li>
                  <strong>Full Stack Development Bootcamp</strong> – Udemy &
                  Self-Learning
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "#9ca3af",
                      marginTop: "4px",
                    }}
                  >
                    MERN Stack, RESTful APIs, Modern JavaScript, Git Workflows
                  </span>
                </li>
              </motion.ul>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
