import React from 'react';
import Header from './components/Version2/Header';
import Hero from './components/Version2/Hero';
import Story from './components/Version2/Story';
import Skills from './components/Version2/Skills';
import Experience from './components/Version2/Experience';
import CareerTimeline from './components/Version2/CareerTimeline';
import Projects from './components/Version2/Projects';
import Contact from './components/Version2/Contact';
import Footer from './components/Version2/Footer';
import { portfolioData } from './mockData';
import { Toaster } from './components/ui/toaster';

const Version2 = () => {
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

export default Version2;