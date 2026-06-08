import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-5">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-surface/50 p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Let's build something impactful.</h2>
              <p className="text-textMuted mb-12">Whether you're looking to optimize your operations, build a custom system, or scale your IT infrastructure, I'm ready to help.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-textMuted font-medium mb-1">Email</h4>
                    <a href="mailto:hello@ibrahimkhalid.com" className="text-white font-medium hover:text-primary transition-colors">hello@ibrahimkhalid.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-textMuted font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-white font-medium hover:text-accent transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-textMuted font-medium mb-1">Location</h4>
                    <span className="text-white font-medium">Available Worldwide (Remote) & MENA Region</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-textMuted">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-textMuted">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textMuted">Subject / Inquiry Type</label>
                  <select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                    <option>Software Development</option>
                    <option>ERP System Integration</option>
                    <option>IT Consulting</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-textMuted">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project goals and operational challenges..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primaryDark text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
