import React, { useEffect, useState } from 'react';
import { ArrowRight, Linkedin, Github, Mail, Briefcase, Code, User, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { portfolioData } from '../../mockData';
import { Toaster } from '../ui/toaster';

const Vibrant = () => {
  const [activeTab, setActiveTab] = useState('story');
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const tabs = [
    { id: 'About me', label: 'Story', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Building', icon: Code },
    { id: 'contact', label: 'Lets Connect', icon: Mail }
  ];

  // Read ?tab=... from URL hash query and sync
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="max-w-6xl w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Tech Enthusiast • Weekend Builder</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-none">
                {portfolioData.name}
              </h1>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                <p className="text-xl font-semibold">{portfolioData.title}</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {portfolioData.story.intro}
              </p>
              <div className="flex gap-3 pt-4">
                <a href={`https://www.linkedin.com/in/anshujainpm/}`} target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-sm">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
                <a href={`mailto:${portfolioData.email}`}
                   className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-sm">
                  <Mail className="h-5 w-5 text-slate-700" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 shadow-2xl">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGIBhHyXduddw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673186432251?e=1762992000&v=beta&t=qHxkh-AcaBuNwh_FamMjedVB_UjpuROSQRIYghjGngE" 
                    alt="AJ"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section - Full Screen */}
      <section className="min-h-screen flex flex-col px-6 py-12 bg-white">
        <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 overflow-hidden">
            {/* Story Tab */}
            {activeTab === 'story' && (
              <div className="animate-fadeIn space-y-8">
                <div className="text-center mb-8">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                    About Me
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">My Story</h2>
                  <p className="text-xl text-slate-600">{portfolioData.story.philosophy}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioData.story.highlights.map((highlight, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed flex-1">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Skills</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {portfolioData.skills.map((skill, index) => (
                      <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-slate-100">
                        <div className="flex justify-between items-baseline mb-3">
                          <h3 className="text-base font-semibold text-slate-900">{skill.name}</h3>
                          <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="animate-fadeIn space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                    Professional Journey
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Career Journey</h2>
                  <p className="text-xl text-slate-600">5+ years in BSFI • MBA Graduate</p>
                </div>
                {portfolioData.experience.map((exp) => (
                  <div key={exp.id} className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
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
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                              <p className="text-slate-700">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                    Portfolio
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Weekend Projects</h2>
                  <p className="text-xl text-slate-600">Built with curiosity on weekends</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioData.projects.map((project, index) => {
                    const gradients = [
                      'from-blue-500 to-indigo-500',
                      'from-purple-500 to-pink-500',
                      'from-green-500 to-emerald-500',
                      'from-orange-500 to-red-500'
                    ];
                    return (
                      <div key={project.id} className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200">
                        <div className="aspect-video bg-slate-100 overflow-hidden relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 4]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                          <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs rounded-lg font-medium border border-blue-100">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="animate-fadeIn max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                    Get In Touch
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
                  <p className="text-xl text-slate-600">Open to new opportunities in tech-focused product roles</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="text-slate-900 font-semibold">{portfolioData.email}</p>
                      </div>
                    </a>
                    <a href={`https://www.linkedin.com/in/anshujainpm/}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">LinkedIn</p>
                        <p className="text-slate-900 font-semibold">Connect with me</p>
                      </div>
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input 
                          type="text" 
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="border-slate-300 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Input 
                          type="email" 
                          placeholder="anshu.jain@zohomail.in"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="border-slate-300 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Textarea 
                          placeholder="Your message..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                          className="border-slate-300 focus:border-blue-500 resize-none"
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-5 transition-all duration-300 hover:scale-105 shadow-md"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default Vibrant;
