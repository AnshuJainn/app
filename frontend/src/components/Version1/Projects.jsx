import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '../ui/button';

const Projects = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-6">Side Projects</h2>
          <p className="text-xl text-gray-600 font-light">
            Building in public with modern tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <div key={project.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-black mb-3 group-hover:underline transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;