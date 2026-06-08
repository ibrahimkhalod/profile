import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <a href="#" className="text-xl font-bold font-heading tracking-tight text-white group">
            Ibrahim<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-textMuted mt-2">Systems Architect & IT Consultant</p>
        </div>

        <div className="text-sm text-textMuted">
          &copy; {new Date().getFullYear()} Ibrahim Khalid. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:bg-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:bg-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:bg-primary transition-colors">
            <Twitter size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
