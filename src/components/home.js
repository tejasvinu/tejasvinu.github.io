// src/components/Home.js

import React from 'react';
import Header from './header';
import Resume from './Resume';
import resumeData from './resumeData';

const Home = () => {
  return (
    <div className="">
        <Header />
        <Resume resumeData={resumeData} />  
    </div>
  );
};

export default Home;
