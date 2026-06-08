import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Enterprise School ERP System",
    category: "Software Development",
    tech: ["C#", ".NET", "SQL Server", "Windows Forms"],
    problem: "A major educational institution was losing 40+ hours weekly to manual administrative tasks, fragmented data tracking, and inefficient fee collection processes.",
    solution: "Architected and deployed a comprehensive ERP system unifying admissions, finance, HR, and academic reporting into a centralized database.",
    results: [
      "Reduced administrative workload by 65%",
      "Automated fee collection & reporting",
      "Achieved 100% data integrity across departments"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Academy Management Platform",
    category: "Web Applications",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    problem: "An academy struggled with student portal access, course scheduling conflicts, and disjointed communication between instructors and students.",
    solution: "Developed a scalable web-based management portal providing distinct dashboards for admins, teachers, and students with real-time updates.",
    results: [
      "Scaled platform to support 2,000+ active users",
      "Eliminated scheduling conflicts entirely",
      "Improved student engagement metrics by 40%"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Automated Cost Estimation System",
    category: "Systems Engineering",
    tech: ["C++", "Java", "PostgreSQL", "Qt"],
    problem: "Project managers were spending days manually calculating complex project estimates, leading to human errors and delayed proposals.",
    solution: "Engineered a high-performance algorithm and desktop application to automate material, labor, and overhead cost estimations based on dynamic variables.",
    results: [
      "Cut estimation time from days to minutes",
      "Increased proposal accuracy to 99.5%",
      "Directly contributed to a 25% increase in won contracts"
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "Software Development", "Web Applications", "Systems Engineering"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => filter === "All" || project.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-textMuted text-lg">A selection of high-impact systems I've architected to solve complex operational challenges.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 text-textMuted hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-[4/3] bg-surface">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary font-medium tracking-wide text-sm uppercase">{project.category}</span>
                      <span className="w-8 h-[1px] bg-white/20"></span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> The Problem
                        </h4>
                        <p className="text-textMuted leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> The Solution
                        </h4>
                        <p className="text-textMuted leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                    <h4 className="text-primary font-semibold mb-4 flex items-center gap-2">
                      <TrendingUp size={20} /> Measurable Impact
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-textMain">
                          <CheckCircle2 size={18} className="text-emerald-400 mt-1 shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-xs font-medium bg-surface border border-white/10 rounded-full text-textMuted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
