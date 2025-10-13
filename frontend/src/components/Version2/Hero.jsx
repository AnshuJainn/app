import React from 'react';
import { ArrowRight, Linkedin, Github, Mail, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = ({ data }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Open to New Opportunities</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-none">
                {data.name}
              </h1>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                <p className="text-xl font-semibold">
                  {data.title}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              {data.story.intro}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-base shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-3 items-center">
                <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-sm">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
                <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-sm">
                  <Github className="h-5 w-5 text-slate-700" />
                </a>
                <a href={`mailto:${data.email}`}
                   className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-sm">
                  <Mail className="h-5 w-5 text-slate-700" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521870749737-92928aafcc21?w=800" 
                  alt="AJ - Product Manager"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl -z-10 opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;