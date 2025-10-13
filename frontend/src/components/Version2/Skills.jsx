import React from 'react';

const Skills = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Expertise
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Skills & Capabilities</h2>
          <p className="text-xl text-slate-600">
            Continuously building and refining my product management toolkit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {data.skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
                <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out rounded-full"
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