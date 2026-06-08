import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Database, ShieldCheck, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Database size={32} className="text-primary" />,
    title: "ERP System Development",
    description: "End-to-end architecture of Enterprise Resource Planning systems tailored to your workflows. Eliminate data silos, automate reporting, and gain real-time visibility into your business operations.",
    features: ["Custom Workflows", "Data Migration", "Department Integration"]
  },
  {
    icon: <LayoutDashboard size={32} className="text-accent" />,
    title: "Custom Software Solutions",
    description: "Scalable web and desktop applications designed to solve specific operational bottlenecks. Built with clean code, robust architecture, and a focus on long-term maintainability.",
    features: ["Web Applications", "Desktop Software", "API Integration"]
  },
  {
    icon: <ShieldCheck size={32} className="text-emerald-400" />,
    title: "IT Consulting & Infrastructure",
    description: "Strategic guidance on technology investments, network architecture, and security protocols. Transform your IT department from a cost center into a strategic asset.",
    features: ["Network Design", "System Audits", "Security Implementation"]
  },
  {
    icon: <LineChart size={32} className="text-pink-500" />,
    title: "Digital Marketing Strategy",
    description: "Data-driven marketing campaigns that convert. Combining technical SEO expertise with targeted advertising to drive qualified leads and measurable ROI.",
    features: ["Technical SEO", "Google Ads", "Conversion Optimization"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface/30 border-y border-white/5 relative">
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-accent/10 rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Solutions</h2>
          <p className="text-textMuted text-lg">Partnering with organizations to implement systems that drive efficiency, secure infrastructure, and accelerate growth.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 md:p-10 rounded-2xl group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-textMuted leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs font-medium px-3 py-1 bg-surface border border-white/10 rounded-full text-textMuted">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
