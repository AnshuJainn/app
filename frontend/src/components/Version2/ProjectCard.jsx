import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectCard = ({ project, gradient }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective w-full h-full"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md cursor-pointer">
          <div className="aspect-video relative overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
            ></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.link && (
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 mt-4 flex items-center justify-center gap-2"
              onClick={(e) => {
                e.stopPropagation(); // prevent flip
                window.open(project.link, '_blank');
              }}
            >
              Visit Project <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
