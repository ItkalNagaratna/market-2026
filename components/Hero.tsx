'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import heroImage from '../public/markus-winkler-PQmXUxmfR44-unsplash.jpg';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative overflow-hidden bg-[#c27d7d] py-20 px-4 md:py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-6xl font-black leading-none tracking-tighter md:text-8xl lg:text-9xl">
              <span className="glitch-text block" data-text="FUTURE">FUTURE</span><br />
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] inline-block"
              >
                WEAR
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 max-w-md text-xl font-medium leading-relaxed md:text-2xl"
            >
              Discover our latest collection of premium apparel and accessories. Designed for comfort, durability, and style in every environment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="brutalist-button bg-white px-8 py-4 text-xl flex items-center gap-3 group">
                <span className="font-black">SHOP NOW</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="brutalist-button bg-white px-8 py-4 text-xl hover:bg-black hover:text-white transition-colors">
                VIEW LOOKBOOK
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: y1, rotate }}
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 brutalist-card rotate-6 bg-white opacity-50"></div>
            <div className="absolute inset-0 brutalist-card -rotate-3 bg-black overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative h-full w-full"
              >
                <Image
                  src={heroImage}
                  alt="Future Fashion Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 brutalist-card bg-[#c27d7d] p-6 font-black text-3xl rotate-12 z-20"
            >
              NEW DROP
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-10 -left-10 brutalist-card bg-white p-4 font-black text-xl -rotate-12 z-20"
            >
              EST. 2026
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee effect */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-3 overflow-hidden whitespace-nowrap z-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 font-black text-2xl uppercase"
        >
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Limited Edition</span>
              <span className="w-6 h-6 bg-black rotate-45"></span>
              <span>2026 Collection</span>
              <span className="w-6 h-6 bg-[#c27d7d] rotate-45"></span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
