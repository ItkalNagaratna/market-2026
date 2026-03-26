'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Kaelen V.",
    role: "Digital Nomad",
    text: "The Runner Jacket is a game changer. I can finally navigate the megacity rooftops with zero fatigue. Plus, it looks incredible.",
    rating: 5
  },
  {
    id: 2,
    name: "Sora M.",
    role: "Void Runner",
    text: "The Bio-Metric Gloves actually work. I've been syncing my thoughts with my workstation without the lag. The brutalist design is just the cherry on top.",
    rating: 5
  },
  {
    id: 3,
    name: "Jax R.",
    role: "Cyber-Architect",
    text: "Neo-Market 2026 is the only place I trust for my gear. From the Fiber Scarf to the Cyber-Goggles, the quality is unmatched.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f5f5f5] py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-2 font-black text-lg mb-6 shadow-[6px_6px_0px_0px_rgba(194,125,125,1)]"
          >
            <Quote size={20} /> USER FEEDBACK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-black md:text-8xl uppercase tracking-tighter leading-none"
          >
            Voices from the <br /><span className="text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">Future</span>
          </motion.h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: idx * 0.2 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: idx % 2 === 0 ? 2 : -2,
                y: -10
              }}
              className="brutalist-card p-10 bg-white flex flex-col relative group hover:bg-[#c27d7d] transition-colors duration-300"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#c27d7d] border-3 border-black flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                <Quote size={24} className="text-white" />
              </div>
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={22} 
                    className={i < t.rating ? "fill-black text-black" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-2xl font-black italic mb-12 flex-grow leading-tight group-hover:text-black transition-colors">
                &quot;{t.text}&quot;
              </p>
              <div className="border-t-4 border-black pt-8 flex items-center gap-6 transition-colors">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-16 h-16 bg-[#c27d7d] border-3 border-black flex items-center justify-center font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  {t.name[0]}
                </motion.div>
                <div>
                  <h4 className="font-black text-2xl leading-none uppercase tracking-tighter">{t.name}</h4>
                  <span className="text-sm font-black opacity-40 uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
