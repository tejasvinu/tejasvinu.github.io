// Projects.js

import React from 'react';
import '../css/Projects.css'; // Import your custom CSS for styling
import projectData from './projectData'; // Import your project data

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn button-53 btn-info">
                Learn More
              </a>
              <a href={project.try} target="_blank" rel="noopener noreferrer" className="btn button-53 btn-info">
                Try it
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
