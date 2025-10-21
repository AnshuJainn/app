import React, { useEffect, useState } from 'react';
import { ArrowRight, Linkedin, Github, Mail, Briefcase, Code, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { portfolioData } from '../../mockData';
import { Toaster } from '../ui/toaster';

const CompactVersion1 = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [prevTab, setPrevTab] = useState('story');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const tabs = [
    { id: 'story', label: 'Story', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Sync with ?tab=... from URL (HashRouter)
  useEffect(() => {
    const applyFromLocation = () => {
      const hash = window.location.hash || '#/';
      const [, query = ''] = hash.split('?');
      const params = new URLSearchParams(query);
      const tab = params.get('tab');
      if (tab && ['story','experience','projects','contact'].includes(tab)) {
        setActiveTab(tab);
      }
    };
    applyFromLocation();
    window.addEventListener('hashchange', applyFromLocation);
    return () => window.removeEventListener('hashchange', applyFromLocation);
  }, []);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setIsTransitioning(true);
    setPrevTab(activeTab);
    setTimeout(() => {
      setActiveTab(newTab);
      setIsTransitioning(false);
    }, 150);
  };

  const getAnimationClass = () => {
    const tabOrder = ['story', 'experience', 'projects', 'contact'];
    const prevIndex = tabOrder.indexOf(prevTab);
    const currentIndex = tabOrder.indexOf(activeTab);
    return currentIndex > prevIndex ? 'animate-slideRight' : 'animate-slideLeft';
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center px-4 md:px-6 relative">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-xs md:text-sm font-medium tracking-wider text-gray-500 uppercase">
                  Product Manager • BSFI • Tech Enthusiast
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black leading-none">
                {portfolioData.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {portfolioData.tagline}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {portfolioData.story.intro}
              </p>
              <div className="flex gap-3 pt-4">
                <a
                  href={`https://${portfolioData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-black hover:border-black transition-premium group"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-white transition-premium" />
                </a>
                <a
                  href={`https://${portfolioData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-black hover:border-black transition-premium group"
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-white transition-premium" />
                </a>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-black hover:border-black transition-premium group"
                >
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-white transition-premium" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521870749737-92928aafcc21?w=800"
                  alt="AJ"
                  className="w-full h-full object-cover hover:scale-105 transition-premium"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-black opacity-5 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section - Full Screen */}
      <section className="min-h-screen flex flex-col px-4 md:px-6 py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 md:gap-3 mb-8 md:mb-12 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-premium text-sm md:text-base ${
                    activeTab === tab.id
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-white/60 text-gray-500 hover:bg-white hover:text-gray-900 border border-gray-200/50'
                  }`}
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 overflow-hidden relative">
            <div className={!isTransitioning ? getAnimationClass() : 'opacity-0'} key={activeTab}>
              {/* Content for each tab */}
              {/* Add your story, experience, projects, contact JSX here exactly as before */}
            </div>
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default CompactVersion1;
