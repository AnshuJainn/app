import React from 'react';
import Header from './components/Version1/Header';
import Hero from './components/Version1/Hero';
import Story from './components/Version1/Story';
import Skills from './components/Version1/Skills';
import Experience from './components/Version1/Experience';
import CareerTimeline from './components/Version1/CareerTimeline';
import Projects from './components/Version1/Projects';
import Contact from './components/Version1/Contact';
import Footer from './components/Version1/Footer';
import { portfolioData } from './mockData';
import { Toaster } from './components/ui/toaster';

const Version1 = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero data={portfolioData} />
      <div id="story">
        <Story data={portfolioData} />
      </div>
      <Skills data={portfolioData} />
      <div id="experience">
        <Experience data={portfolioData} />
      </div>
      <CareerTimeline data={portfolioData} />
      <div id="projects">
        <Projects data={portfolioData} />
      </div>
      <Contact data={portfolioData} />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Version1;