import React from 'react';
import {Link} from 'react-router-dom';
import '../css/header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <nav>
          <ul className='horizontal-list'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
        <h1 className="header-text display-1">I am Tejas Vinay</h1>
        <p className="sub-header smaller-text">I am a full-stack developer, I love translating innovative ideas into user-friendly solutions. Beyond coding, I'm an avid gamer and tech enthusiast with a keen interest in automotive tech. Always up for challenges, I'm passionate about staying at the forefront of technology and gaming trends.</p>
      </div>
    </header>
  );
}

export default Header;
