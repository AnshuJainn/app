import React, { useState } from 'react';
import { ArrowRight, Linkedin, Github, Mail, Briefcase, Code, User, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { portfolioData } from '../../mockData';
import { Toaster } from '../ui/toaster';

const CompactVersion1 = () => {
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
    { id: 'story', label: 'Story', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                  Product Manager • BSFI • Tech Enthusiast
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-light tracking-tight text-black leading-none">
                {portfolioData.name}
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {portfolioData.tagline}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {portfolioData.story.intro}
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex gap-3">
                  <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" 
                     className="p-3 border border-gray-300 rounded-lg hover:border-black transition-all duration-300 hover:scale-110">
                    <Linkedin className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer"
                     className="p-3 border border-gray-300 rounded-lg hover:border-black transition-all duration-300 hover:scale-110">
                    <Github className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href={`mailto:${portfolioData.email}`}
                     className="p-3 border border-gray-300 rounded-lg hover:border-black transition-all duration-300 hover:scale-110">
                    <Mail className="h-5 w-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1521870749737-92928aafcc21?w=800" 
                  alt="AJ"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black opacity-5 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section - Full Screen */}
      <section className="min-h-screen flex flex-col px-6 py-12 bg-gray-50">
        <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-black text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
                  <h2 className="text-4xl font-light text-black mb-4">My Story</h2>
                  <p className="text-xl text-gray-600 font-light">{portfolioData.story.philosophy}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioData.story.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-black transition-all duration-300">
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed flex-1">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-light text-black mb-6 text-center">Skills</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {portfolioData.skills.map((skill, index) => (
                      <div key={index} className="space-y-2 bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-baseline">
                          <h3 className="text-base font-medium text-black">{skill.name}</h3>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-black transition-all duration-1000 ease-out"
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
                  <h2 className="text-4xl font-light text-black mb-4">Career Journey</h2>
                  <p className="text-xl text-gray-600 font-light">5+ years in BSFI • MBA Graduate</p>
                </div>
                {portfolioData.experience.map((exp) => (
                  <div key={exp.id} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-black transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <Briefcase className="h-8 w-8 text-black" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                          <div>
                            <h3 className="text-2xl font-medium text-black mb-1">{exp.role}</h3>
                            <p className="text-lg text-gray-600">{exp.company}</p>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                              <p className="text-gray-700">{achievement}</p>
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
                  <h2 className="text-4xl font-light text-black mb-4">Weekend Projects</h2>
                  <p className="text-xl text-gray-600 font-light">Built with curiosity on weekends</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioData.projects.map((project) => (
                    <div key={project.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300">
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-medium text-black mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="animate-fadeIn max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-light text-black mb-4">Let's Connect</h2>
                  <p className="text-xl text-gray-600 font-light">Open to new opportunities in tech-focused product roles</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-black transition-all duration-300 group">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-colors duration-300">
                        <Mail className="h-6 w-6 text-black group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-black font-medium">{portfolioData.email}</p>
                      </div>
                    </a>
                    <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-black transition-all duration-300 group">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-colors duration-300">
                        <Linkedin className="h-6 w-6 text-black group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">LinkedIn</p>
                        <p className="text-black font-medium">Connect with me</p>
                      </div>
                    </a>
                    <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-black transition-all duration-300 group">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-colors duration-300">
                        <Github className="h-6 w-6 text-black group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">GitHub</p>
                        <p className="text-black font-medium">View projects</p>
                      </div>
                    </a>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input 
                          type="text" 
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="border-gray-300 focus:border-black"
                        />
                      </div>
                      <div>
                        <Input 
                          type="email" 
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="border-gray-300 focus:border-black"
                        />
                      </div>
                      <div>
                        <Textarea 
                          placeholder="Your message..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                          className="border-gray-300 focus:border-black resize-none"
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white py-5 transition-all duration-300 hover:scale-105"
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

export default CompactVersion1;