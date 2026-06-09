import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail size={28} className="text-primary" />,
    label: "Email",
    value: "ibrahimkhalod@gmail.com",
    href: "mailto:ibrahimkhalod@gmail.com",
    color: "group-hover:bg-primary"
  },
  {
    icon: <Phone size={28} className="text-accent" />,
    label: "Phone (KSA)",
    value: "+966 538 136 393",
    href: "tel:+966538136393",
    color: "group-hover:bg-accent"
  },
  {
    icon: <Phone size={28} className="text-emerald-400" />,
    label: "Phone (ETH)",
    value: "+251 915 555 155",
    href: "tel:+251915555155",
    color: "group-hover:bg-emerald-500"
  },
  {
    icon: <MapPin size={28} className="text-pink-400" />,
    label: "Location",
    value: "Jeddah, Saudi Arabia",
    href: null,
    color: "group-hover:bg-pink-500"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute left-0 top-0 w-72 h-72 bg-accent/10 rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something impactful.</h2>
          <p className="text-textMuted text-lg">
            Whether you need a custom software solution, IT consultation, a stunning brand identity, or a digital strategy that converts — reach out and let's get to work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className={`group glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                >
                  <div className={`p-4 rounded-full bg-white/5 border border-white/10 transition-colors duration-300 ${item.color} group-hover:border-transparent`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-textMuted uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-textMuted uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="mailto:ibrahimkhalod@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primaryDark text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
          >
            <Mail size={22} />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
