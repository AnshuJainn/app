import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Professional Journey
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Experience</h2>
          <p className="text-xl text-slate-600">
            A journey from sales to product management
          </p>
        </div>
        
        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-10 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">{achievement}</p>
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