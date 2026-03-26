'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Search, Cpu, Globe, Shield, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('SYSTEM_ONLINE');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] p-4 md:p-6 pointer-events-none">
      <div className="mx-auto max-w-7xl flex flex-col gap-4">
        {/* Top Status Bar */}
        <div className="flex justify-between items-center pointer-events-auto">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="brutalist-card bg-black text-white px-4 py-1 flex items-center gap-4"
          >
            <div className="flex items-center gap-2 terminal-text">
              <Cpu size={14} className="text-[#00ff00]" />
              <span>NEO_OS v2.6</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-700" />
            <div className="terminal-text">{time}</div>
            <div className="h-4 w-[1px] bg-gray-700" />
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="terminal-text text-[#00ff00]"
            >
              {status}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex gap-2"
          >
            <button className="brutalist-button bg-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c27d7d]">
              <Search size={20} />
            </button>
            <button className="brutalist-button bg-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c27d7d]">
              <ShoppingCart size={20} />
            </button>
          </motion.div>
        </div>

        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center pointer-events-auto">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="brutalist-card bg-white p-4 flex items-center gap-6"
          >
            <div className="text-3xl font-black tracking-tighter skew-x-[-10deg]">
              NEO<span className="bg-black text-white px-2 ml-1">MARKET</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 font-black text-sm tracking-widest">
              {['COLLECTIONS', 'ARCHIVE', 'NEURAL_LINK'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ skewX: -10, x: 5, color: '#c27d7d' }}
                  className="relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden brutalist-button bg-white p-4"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, skewY: 10, y: '100%' }}
            animate={{ opacity: 1, skewY: 0, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="fixed inset-0 z-[70] bg-[#c27d7d] p-8 flex flex-col justify-center pointer-events-auto"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 brutalist-button bg-white p-4"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8">
              {['SHOP', 'ARCHIVE', 'CONNECT', 'INFO'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href="#"
                  className="text-7xl font-black text-white hover:text-black transition-colors uppercase tracking-tighter italic"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-20 border-t-4 border-black pt-8 flex justify-between items-end">
              <div className="text-4xl font-black">2026_EST</div>
              <div className="flex gap-4">
                <Globe size={32} />
                <Shield size={32} />
                <Terminal size={32} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
