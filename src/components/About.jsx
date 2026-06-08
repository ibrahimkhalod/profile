import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              More than a developer. <br/>
              <span className="text-textMuted">A strategic problem solver.</span>
            </h2>
            <div className="space-y-6 text-textMuted text-lg leading-relaxed">
              <p>
                With over <strong className="text-white">8 years of experience</strong> across software development, IT infrastructure, and digital strategy, I don't just write code—I build comprehensive business solutions.
              </p>
              <p>
                As an IT Supervisor and former IT Director, my approach is fundamentally rooted in understanding business operations. Whether engineering an enterprise-grade ERP system or optimizing a network architecture, my focus remains constant: <strong className="text-primary">delivering measurable ROI, reducing friction, and scaling operations</strong>.
              </p>
              <p>
                I thrive at the intersection of robust backend engineering, intuitive user experiences, and data-driven marketing, enabling me to see the "big picture" that isolated specialists often miss.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">8+</h4>
                <p className="text-sm text-textMuted uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">40+</h4>
                <p className="text-sm text-textMuted uppercase tracking-wider">Systems Deployed</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {[
              {
                icon: <Target className="text-primary" size={28} />,
                title: "Business-First Approach",
                description: "Every line of code and infrastructure decision is aligned with core business objectives and profitability."
              },
              {
                icon: <Zap className="text-accent" size={28} />,
                title: "Process Automation",
                description: "Expertise in identifying operational bottlenecks and engineering automated workflows to save thousands of man-hours."
              },
              {
                icon: <BarChart3 className="text-emerald-400" size={28} />,
                title: "Data-Driven Growth",
                description: "Leveraging digital marketing and analytics to turn technical implementations into tangible market growth."
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl flex gap-6 items-start hover:bg-surface/80 transition-colors duration-300">
                <div className="p-4 bg-white/5 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-textMuted">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
