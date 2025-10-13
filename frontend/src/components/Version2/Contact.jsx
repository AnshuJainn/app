import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';

const Contact = ({ data }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-blue-100">
            Open to new opportunities and collaborations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                I'm always excited to discuss product opportunities, collaboration ideas, or just chat about the latest in tech and product management.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href={`mailto:${data.email}`} className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="text-white font-semibold">{data.email}</p>
                </div>
              </a>
              
              <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">LinkedIn</p>
                  <p className="text-white font-semibold">Connect with me</p>
                </div>
              </a>
              
              <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">GitHub</p>
                  <p className="text-white font-semibold">View my projects</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Name</label>
                <Input 
                  type="text" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your idea or opportunity..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20 resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-white text-blue-900 hover:bg-blue-50 py-6 font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;