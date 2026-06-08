import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "IT Supervisor",
    company: "Abu Sarhad",
    period: "2026 - Present",
    description: "Leading IT operations and infrastructure management for enterprise systems. Orchestrating network architecture, driving digital transformation initiatives, and ensuring high-availability operations across multiple departments."
  },
  {
    role: "IT Support Specialist",
    company: "Saql Education",
    period: "2025 - 2026",
    description: "Managed mission-critical educational software systems. Streamlined troubleshooting protocols and reduced system downtime by 40% through proactive monitoring and technical team training."
  },
  {
    role: "IT Specialist",
    company: "Raed Food Company",
    period: "2023 - 2025",
    description: "Oversaw corporate IT infrastructure and internal systems. Implemented robust data management protocols and integrated cross-functional software solutions to improve supply chain visibility."
  },
  {
    role: "IT Director",
    company: "Wise School",
    period: "2019 - 2022",
    description: "Directed all technology strategies and budgets. Spearheaded the development of a proprietary ERP system that modernized administrative workflows and completely digitized student records."
  },
  {
    role: "IT Administrator",
    company: "Logistics Company - Dubai",
    period: "2017 - 2018",
    description: "Administered network operations and operational tech stack for a high-volume logistics firm. Optimized routing software performance and maintained 99.9% network uptime."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Journey</h2>
          <p className="text-textMuted text-lg">A track record of progressive leadership and technical excellence across education, logistics, and corporate sectors.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-41px] md:left-[-41px] top-1.5 w-5 h-5 rounded-full bg-surface border-4 border-primary z-10"></div>
                
                <div className="glass-card p-8 rounded-2xl hover:bg-surface/80 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-textMain font-medium mt-1">
                        <Briefcase size={16} className="text-accent" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-sm font-semibold text-textMuted border border-white/10 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-textMuted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
