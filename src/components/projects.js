// src/components/Projects.js

import React from 'react';

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2>My Projects</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project 1</h5>
          <p className="card-text">Description of Project 1.</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Project 2</h5>
          <p className="card-text">Description of Project 2.</p>
        </div>
      </div>
      {/* Add more projects as needed */}
    </div>
  );
};

export default Projects;
