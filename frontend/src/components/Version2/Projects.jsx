import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  const gradients = [
    'from-blue-500 to-indigo-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500'
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Side Projects</h2>
          <p className="text-xl text-slate-600">
            Building in public with modern tools
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              gradient={gradients[index % gradients.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

