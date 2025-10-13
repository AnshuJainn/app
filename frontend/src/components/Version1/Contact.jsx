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
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 font-light">
            Open to new opportunities and collaborations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-black mb-6">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always excited to discuss product opportunities, collaboration ideas, or just chat about the latest in tech and product management.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href={`mailto:${data.email}`} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-black transition-all duration-300 group">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-colors duration-300">
                  <Mail className="h-5 w-5 text-black group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-black font-medium">{data.email}</p>
                </div>
              </a>
              
              <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-black transition-all duration-300 group">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-black group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-black font-medium">Connect with me</p>
                </div>
              </a>
              
              <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-black transition-all duration-300 group">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black transition-colors duration-300">
                  <Github className="h-5 w-5 text-black group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-black font-medium">View my projects</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your idea or opportunity..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="border-gray-300 focus:border-black resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-6 transition-all duration-300 hover:scale-105"
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