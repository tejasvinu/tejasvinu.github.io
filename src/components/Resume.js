// Resume.js

import React from 'react';
import '../css/Resume.css'; // Import your custom CSS for styling

function Resume({ resumeData }) {
  return (
    <div className="resume">
      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="resume-item">
          <i className="fas fa-graduation-cap"></i>
          <div className="resume-info">
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.graduated}</p>
            <p>{edu.description}</p>
          </div>
        </div>
      ))}

      <h2>Skills</h2>
      <div className="skills">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="skill">
            <p>{skill.name}</p>
            <div className="skill-bar" style={{ width: skill.level }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
