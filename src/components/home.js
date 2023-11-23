// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold">Tejas Vinay P</h1>
          <p className="lead">Web Developer | Designer | Problem Solver</p>
          <hr className="my-4" />
          <p className="fs-5">
            Welcome to my portfolio! I am a passionate web developer with a focus on creating
            user-friendly and elegant solutions. Explore my projects and skills below.
          </p>
          <div className="d-flex">
            <Link to="/projects" className="btn btn-primary btn-lg me-2">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Contact Me
            </Link> 
          </div>
        </div>
        <div className="col-lg-4">
          <img
            src="https://github.com/tejasvinu/myPortfolio/blob/4ee2f7eb81dc838962e6eefb9afa4362744e3da4/frontend/public/IMG_7633-01.jpeg?raw=true"
            alt="tejasvinu"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
