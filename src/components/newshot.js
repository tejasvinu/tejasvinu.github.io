// ProjectsStack.js

import React from 'react';
import '../css/ProjectStack.css'; // Import your CSS file

const ProjectsStack = ({ exploded }) => {
  return (
    <div className={`stack ${exploded ? 'exploded' : ''}`}>
      {/* ... rest of the content remains the same */}
    </div>
  );
};

export default ProjectsStack;
