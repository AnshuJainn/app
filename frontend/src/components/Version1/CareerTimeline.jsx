import React from 'react';

const CareerTimeline = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-6">Career Journey</h2>
          <p className="text-xl text-gray-600 font-light">
            Evolution of a product thinker
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>
          
          <div className="space-y-12">
            {data.careerJourney.map((milestone, index) => (
              <div key={index} className="relative pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-5 top-2 w-7 h-7 bg-black rounded-full border-4 border-white group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:border hover:border-black transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-lg mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-medium text-black mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
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