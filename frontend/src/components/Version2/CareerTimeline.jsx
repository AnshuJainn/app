import React from 'react';
import { Calendar } from 'lucide-react';

const CareerTimeline = ({ data }) => {
  const colors = [
    'from-blue-500 to-indigo-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-amber-500'
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Timeline
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Career Journey</h2>
          <p className="text-xl text-slate-600">
            Evolution of a product thinker
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200"></div>
          
          <div className="space-y-12">
            {data.careerJourney.map((milestone, index) => (
              <div key={index} className="relative pl-20 group">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-2 w-9 h-9 bg-gradient-to-br ${colors[index % 4]} rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className={`px-4 py-1.5 bg-gradient-to-r ${colors[index % 4]} text-white text-sm font-bold rounded-full shadow-md`}>
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;