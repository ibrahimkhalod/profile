import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Megaphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Software Engineering",
    icon: <Code2 size={24} className="text-primary" />,
    skills: ["C#", "PHP", "Java", "C++", "JavaScript", "HTML/CSS", "Flutter", "RESTful APIs", "MySQL", "React"]
  },
  {
    title: "IT & Infrastructure",
    icon: <Server size={24} className="text-accent" />,
    skills: ["ERP Systems", "Network Admin (CCNA)", "Windows Server", "System Architecture", "IT Support", "Security", "Cloud Deployment"]
  },
  {
    title: "Digital Strategy & Design",
    icon: <Megaphone size={24} className="text-pink-500" />,
    skills: ["SEO Optimization", "Google Ads", "Digital Strategy", "UI/UX Design", "Graphic Design", "Conversion Rate Optimization"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Expertise</h2>
          <p className="text-textMuted text-lg">A multidisciplinary skill set enabling end-to-end oversight of complex digital transformations, from infrastructure to user acquisition.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-md text-textMain hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
