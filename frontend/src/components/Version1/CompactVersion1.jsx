import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Github, Mail, Briefcase, Code, User, Sparkles } from 'lucide-react';
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
    
    if (currentIndex > prevIndex) {
      return 'animate-slideRight';
    } else {
      return 'animate-slideLeft';
    }
  };

  return (
    <div className=\"min-h-screen bg-white overflow-x-hidden\">
      {/* Hero Section - Full Screen */}
      <section className=\"h-screen flex items-center justify-center px-4 md:px-6 relative\">
        <div className=\"max-w-6xl w-full\">
          <div className=\"grid md:grid-cols-2 gap-8 md:gap-12 items-center\">
            <div className=\"space-y-4 md:space-y-6\">
              <div className=\"inline-block\">
                <span className=\"text-xs md:text-sm font-medium tracking-wider text-gray-500 uppercase\">
                  Product Manager • BSFI • Tech Enthusiast
                </span>
              </div>
              <h1 className=\"text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black leading-none\">
                {portfolioData.name}
              </h1>
              <p className=\"text-lg md:text-xl text-gray-600 font-light leading-relaxed\">
                {portfolioData.tagline}
              </p>
              <p className=\"text-base md:text-lg text-gray-700 leading-relaxed\">
                {portfolioData.story.intro}
              </p>
              <div className=\"flex gap-3 pt-4\">
                <a href={`https://${portfolioData.linkedin}`} target=\"_blank\" rel=\"noopener noreferrer\" 
                   className=\"p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-black hover:border-black transition-premium group\">
                  <Linkedin className=\"h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-white transition-premium\" />
                </a>
                <a href={`https://${portfolioData.github}`} target=\"_blank\" rel=\"noopener noreferrer\"
                   className=\"p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-black hover:border-black transition-premium group\">
                  <Github className=\"h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-white transition-premium\" />
                </a>
                <a href={`mailto:${portfolioData.email}`}
                   className=\"p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-black hover:border-black transition-premium group\">
                  <Mail className=\"h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-white transition-premium\" />
                </a>
              </div>
            </div>
            <div className=\"relative\">
              <div className=\"aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl\">
                <img 
                  src=\"https://images.unsplash.com/photo-1521870749737-92928aafcc21?w=800\" 
                  alt=\"AJ\"
                  className=\"w-full h-full object-cover hover:scale-105 transition-premium\"
                />
              </div>
              <div className=\"absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-black opacity-5 rounded-2xl -z-10\"></div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className=\"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block\">
          <div className=\"w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2\">
            <div className=\"w-1 h-3 bg-gray-300 rounded-full\"></div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section - Full Screen */}
      <section className=\"min-h-screen flex flex-col px-4 md:px-6 py-8 md:py-12 bg-gray-50\">
        <div className=\"max-w-6xl w-full mx-auto flex-1 flex flex-col\">
          {/* Muted Tab Navigation */}
          <div className=\"flex justify-center gap-2 md:gap-3 mb-8 md:mb-12 flex-wrap\">
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
                  <Icon className=\"h-4 w-4 md:h-5 md:w-5\" />
                  <span className=\"hidden sm:inline\">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area with Premium Transitions */}
          <div className="flex-1 overflow-hidden relative">
            <div className={!isTransitioning ? getAnimationClass() : 'opacity-0'} key={activeTab}>
              {/* Story Tab */}
              {activeTab === 'story' && (
                <div className="space-y-6 md:space-y-8">
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-4xl font-light text-black mb-3 md:mb-4">My Story</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light px-4">{portfolioData.story.philosophy}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {portfolioData.story.highlights.map((highlight, index) => (
                      <div key={index} className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:border-black hover:shadow-md transition-premium">
                        <div className="flex gap-3 md:gap-4 items-start">
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
                          </div>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">{highlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 md:mt-8">
                    <h3 className="text-xl md:text-2xl font-light text-black mb-4 md:mb-6 text-center">Skills</h3>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {portfolioData.skills.map((skill, index) => (
                        <div key={index} className="space-y-2 bg-white p-3 md:p-4 rounded-lg border border-gray-200">
                          <div className="flex justify-between items-baseline">
                            <h3 className="text-sm md:text-base font-medium text-black">{skill.name}</h3>
                            <span className="text-xs md:text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-black transition-premium"
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
                <div className="space-y-4 md:space-y-6">
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-4xl font-light text-black mb-3 md:mb-4">Career Journey</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light">5+ years in BSFI • MBA Graduate</p>
                  </div>
                  {portfolioData.experience.map((exp) => (
                    <div key={exp.id} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-black hover:shadow-lg transition-premium">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="p-3 md:p-4 bg-gray-50 rounded-xl hidden md:block">
                          <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-black" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3 md:mb-4 flex-wrap gap-2 md:gap-4">
                            <div>
                              <h3 className="text-xl md:text-2xl font-medium text-black mb-1">{exp.role}</h3>
                              <p className="text-base md:text-lg text-gray-600">{exp.company}</p>
                            </div>
                            <span className="text-xs md:text-sm text-gray-500 font-medium">{exp.period}</span>
                          </div>
                          <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">{exp.description}</p>
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex gap-2 md:gap-3 items-start">
                                <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 md:mt-2"></div>
                                <p className="text-sm md:text-base text-gray-700">{achievement}</p>
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
                <div>
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-4xl font-light text-black mb-3 md:mb-4">Weekend Projects</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light">Built with curiosity on weekends</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {portfolioData.projects.map((project) => (
                      <div key={project.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-lg transition-premium">
                        <div className="aspect-video bg-gray-100 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-premium"
                          />
                        </div>
                        <div className="p-5 md:p-6">
                          <h3 className="text-lg md:text-xl font-medium text-black mb-2">{project.title}</h3>
                          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">{project.description}</p>
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
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-4xl font-light text-black mb-3 md:mb-4">Let's Connect</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light px-4">Open to new opportunities in tech-focused product roles</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3 md:space-y-4">
                      <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl border border-gray-200 hover:border-black hover:shadow-md transition-premium group">
                        <div className="p-2.5 md:p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-premium">
                          <Mail className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white transition-premium" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm text-gray-500">Email</p>
                          <p className="text-sm md:text-base text-black font-medium">{portfolioData.email}</p>
                        </div>
                      </a>
                      <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl border border-gray-200 hover:border-black hover:shadow-md transition-premium group">
                        <div className="p-2.5 md:p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-premium">
                          <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white transition-premium" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm text-gray-500">LinkedIn</p>
                          <p className="text-sm md:text-base text-black font-medium">Connect with me</p>
                        </div>
                      </a>
                      <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl border border-gray-200 hover:border-black hover:shadow-md transition-premium group">
                        <div className="p-2.5 md:p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-premium">
                          <Github className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white transition-premium" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm text-gray-500">GitHub</p>
                          <p className="text-sm md:text-base text-black font-medium">View projects</p>
                        </div>
                      </a>
                    </div>
                    <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200 shadow-sm">
                      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                        <div>
                          <Input 
                            type="text" 
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            className="border-gray-300 focus:border-black transition-premium"
                          />
                        </div>
                        <div>
                          <Input 
                            type="email" 
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="border-gray-300 focus:border-black transition-premium"
                          />
                        </div>
                        <div>
                          <Textarea 
                            placeholder="Your message..."
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                            className="border-gray-300 focus:border-black resize-none transition-premium"
                          />
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-black hover:bg-gray-800 text-white py-4 md:py-5 transition-premium hover:shadow-lg"
                        >
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default CompactVersion1;
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default CompactVersion1;