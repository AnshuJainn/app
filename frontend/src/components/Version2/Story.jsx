import React from 'react';
import { Lightbulb, BookOpen, Target, Sparkles } from 'lucide-react';

const Story = ({ data }) => {
  const traits = [
    { icon: Lightbulb, title: "Curious Mind", desc: "Always exploring new ideas", color: "from-yellow-400 to-orange-400" },
    { icon: BookOpen, title: "MBA Student", desc: "Deepening business acumen", color: "from-blue-400 to-cyan-400" },
    { icon: Target, title: "Deep Work", desc: "Focused on meaningful impact", color: "from-green-400 to-emerald-400" },
    { icon: Sparkles, title: "Open to New", desc: "Looking for next challenge", color: "from-purple-400 to-pink-400" }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            About Me
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">My Story</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {data.story.philosophy}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <div key={index} className="text-center space-y-4 group">
                <div className={`inline-block p-5 bg-gradient-to-br ${trait.color} rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">{trait.title}</h3>
                <p className="text-sm text-slate-600">{trait.desc}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-blue-100 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Journey Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.story.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4 items-start group bg-white p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-slate-700 leading-relaxed flex-1">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;