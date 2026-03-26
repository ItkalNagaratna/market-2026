'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Info, Globe, Shield, Cpu } from 'lucide-react';

const infoItems = [
  {
    icon: Globe,
    title: "Global Distribution",
    description: "From our Runner Jackets to Fiber Scarfs, we ship to all major megacities and lunar colonies via hyper-loop."
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Quantum-encrypted payments for all gear. We accept all major crypto-credits and neural-transfers."
  },
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Our Bio-Metric Gloves and Cyber-Goggles integrate with your personal OS for real-time tracking."
  }
];

export default function MoreInfo() {
  return (
    <section id="info" className="bg-white py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 font-black text-lg mb-6 uppercase tracking-[0.2em] shadow-[8px_8px_0px_0px_rgba(194,125,125,1)]"
          >
            <Info size={20} /> Technical Specs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-black md:text-8xl uppercase tracking-tighter"
          >
            More <span className="text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">Information</span>
          </motion.h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {infoItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: idx * 0.2
              }}
              whileHover={{ y: -10, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="group brutalist-card p-10 flex flex-col items-center text-center hover:bg-[#c27d7d] transition-colors duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className="w-20 h-20 bg-[#c27d7d] group-hover:bg-white border-4 border-black flex items-center justify-center mb-8 rotate-6 group-hover:rotate-0 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <item.icon size={40} className="group-hover:text-black transition-colors" />
              </motion.div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-black transition-colors">{item.title}</h3>
              <p className="font-bold text-lg leading-relaxed opacity-80 group-hover:opacity-100 group-hover:text-black transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 brutalist-card bg-black text-white p-16 overflow-hidden relative"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none">Join the <br /><span className="text-[#c27d7d]">Resistance</span></h3>
              <p className="text-2xl font-bold text-gray-400 mb-10 leading-tight">
                Subscribe to our neural-feed for exclusive drops and underground event invites.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <input
                  type="email"
                  placeholder="YOUR_EMAIL@NETWORK.COM"
                  className="flex-grow bg-white text-black border-4 border-white px-8 py-5 font-black text-xl focus:outline-none focus:border-[#c27d7d] transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="brutalist-button brutalist-button-primary text-black px-10 py-5 text-2xl"
                >
                  SUBSCRIBE
                </motion.button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-[12rem] font-black opacity-10 select-none leading-none"
              >
                2026<br />CORP
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
