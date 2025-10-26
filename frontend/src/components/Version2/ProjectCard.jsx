import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectCard = ({ project, gradient }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card-container h-96 md:h-80" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        
        {/* Front */}
        <div className="flip-card-front bg-white border border-slate-200 shadow-lg rounded-3xl">
          <div className="aspect-video overflow-hidden relative">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                No Image Available
              </div>
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 hover:opacity-20 transition-opacity duration-300`}></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
            <p className="text-slate-600">{project.description}</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-white border border-slate-200 shadow-lg rounded-3xl">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
            <p className="text-slate-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.link ? (
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}
            >
              Visit Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button className="w-full bg-gray-300 text-gray-700 cursor-not-allowed" disabled>
              No Link Available
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
