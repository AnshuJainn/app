import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const Projects = ({ data }) => {
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
          {data.projects.map((project, index) => {
            const gradients = [
              'from-blue-500 to-indigo-500',
              'from-purple-500 to-pink-500',
              'from-green-500 to-emerald-500',
              'from-orange-500 to-red-500'
            ];

            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                {/* Project Image */}
                <div className="aspect-video bg-slate-100 overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Image Available
                    </div>
                  )}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 4]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  {project.link ? (
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-gray-300 text-gray-700 cursor-not-allowed"
                      disabled
                    >
                      No Link Available
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
