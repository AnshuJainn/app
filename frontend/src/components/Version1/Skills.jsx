import React from 'react';

const Skills = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 font-light">
            Continuously building and refining my product management toolkit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {data.skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-medium text-black">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-black transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;