import React from 'react';
import { Lightbulb, BookOpen, Target, Sparkles } from 'lucide-react';

const Story = ({ data }) => {
  const traits = [
    { icon: Lightbulb, title: "Curious Mind", desc: "Always exploring new ideas" },
    { icon: BookOpen, title: "MBA Student", desc: "Deepening business acumen" },
    { icon: Target, title: "Deep Work", desc: "Focused on meaningful impact" },
    { icon: Sparkles, title: "Open to New", desc: "Looking for next challenge" }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-6">My Story</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {data.story.philosophy}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <div key={index} className="text-center space-y-3 group">
                <div className="inline-block p-4 bg-white rounded-xl border border-gray-200 group-hover:border-black transition-all duration-300">
                  <Icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-medium text-black text-lg">{trait.title}</h3>
                <p className="text-sm text-gray-600">{trait.desc}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-2xl p-12 border border-gray-200">
          <h3 className="text-2xl font-light text-black mb-8">Journey Highlights</h3>
          <div className="space-y-6">
            {data.story.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-black rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                <p className="text-gray-700 leading-relaxed flex-1">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;