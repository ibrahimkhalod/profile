import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <a href="#" className="text-xl font-bold font-heading tracking-tight text-white group">
            Ibrahim<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-textMuted mt-2">Creative Graphic Designer & IT Consultant</p>
        </div>

        <div className="text-sm text-textMuted">
          &copy; {new Date().getFullYear()} Ibrahim Khalid. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="mailto:ibrahimkhalod@gmail.com" 
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:bg-primary transition-colors"
            title="ibrahimkhalod@gmail.com"
          >
            <Mail size={18} />
          </a>
          <a 
            href="tel:+966538136393" 
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:bg-primary transition-colors"
            title="+966 538 136 393"
          >
            <Phone size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
