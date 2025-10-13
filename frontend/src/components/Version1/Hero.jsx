import React from 'react';
import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = ({ data }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                  Product Manager
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-light tracking-tight text-black leading-none">
                {data.name}
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {data.tagline}
              </p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              {data.story.intro}
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-3 items-center">
                <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" 
                   className="p-3 border border-gray-300 rounded-lg hover:border-black transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-5 w-5 text-gray-700" />
                </a>
                <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer"
                   className="p-3 border border-gray-300 rounded-lg hover:border-black transition-all duration-300 hover:scale-110">
                  <Github className="h-5 w-5 text-gray-700" />
                </a>
                <a href={`mailto:${data.email}`}
                   className="p-3 border border-gray-300 rounded-lg hover:border-black transition-all duration-300 hover:scale-110">
                  <Mail className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1521870749737-92928aafcc21?w=800" 
                alt="AJ - Product Manager"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black opacity-5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;