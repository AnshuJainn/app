import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by AJ
        </p>
        <p className="text-slate-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;