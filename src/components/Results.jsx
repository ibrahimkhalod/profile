import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Activity } from 'lucide-react';

const achievements = [
  {
    icon: <Activity size={32} className="text-primary" />,
    metric: "300%",
    title: "Efficiency Increase",
    desc: "Built custom ERP systems that eliminated manual data entry, improving overall administrative efficiency drastically."
  },
  {
    icon: <TrendingUp size={32} className="text-emerald-400" />,
    metric: "40 hrs",
    title: "Weekly Time Saved",
    desc: "Reduced manual processes across departments through intelligent automation and unified databases."
  },
  {
    icon: <Users size={32} className="text-accent" />,
    metric: "10,000+",
    title: "Users Managed",
    desc: "Architected and managed scalable IT systems supporting thousands of concurrent users across multiple organizations."
  },
  {
    icon: <Trophy size={32} className="text-yellow-500" />,
    metric: "99.9%",
    title: "System Uptime",
    desc: "Ensured robust infrastructure stability and continuous delivery of critical enterprise applications."
  }
];

export default function Results() {
  return (
    <section id="results" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven Business Impact</h2>
          <p className="text-textMuted text-lg">Technology is only as valuable as the results it produces. I measure success in operational efficiency, time saved, and revenue generated.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="inline-flex p-4 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{item.metric}</h3>
              <h4 className="text-lg font-semibold text-textMain mb-3">{item.title}</h4>
              <p className="text-sm text-textMuted">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primaryDark to-accent p-[1px] rounded-2xl"
        >
          <div className="bg-surface rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stop patching broken processes.</h3>
              <p className="text-textMuted text-lg">Whether you need a custom application built from the ground up or a complete overhaul of your IT infrastructure, I deliver scalable, ROI-focused solutions.</p>
            </div>
            <a href="#contact" className="px-8 py-4 bg-white text-background font-bold rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
              Discuss Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
