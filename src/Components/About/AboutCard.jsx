import React from 'react';
import './AboutCard.css';

const AboutCard = () => {
  return (
    <div className="about-3d-container">
      <div className="about-3d-card">
        <div className="about-card-face about-card-front">
          <div className="about-card-content">
            <h3>Full Stack Developer</h3>
            <p>Creating amazing digital experiences</p>
            <div className="about-card-icon">💻</div>
          </div>
        </div>
        <div className="about-card-face about-card-back">
          <div className="about-card-content">
            <h3>Creative Problem Solver</h3>
            <p>Turning ideas into reality</p>
            <div className="about-card-icon">🚀</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
