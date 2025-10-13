import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-6">Experience</h2>
          <p className="text-xl text-gray-600 font-light">
            A journey from sales to product management
          </p>
        </div>
        
        <div className="space-y-12">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="bg-white rounded-2xl p-10 border border-gray-200 hover:border-black transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <Briefcase className="h-8 w-8 text-black" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-medium text-black mb-1">{exp.role}</h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;