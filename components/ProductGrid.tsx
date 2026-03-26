'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Plus, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Runner Jacket",
    price: 89,
    category: "Outerwear",
    image: "/hamed-darzi-u42GjVgZgV0-unsplash.jpg"
  },
  {
    id: 2,
    name: "Fiber Scarf",
    price: 299,
    category: "Accessories",
    image: "/ling-hua-dkB4ewB0-Cw-unsplash.jpg"
  },
  {
    id: 3,
    name: "Tops",
    price: 55,
    category: "Apparel",
    image: "/md-salman-tWOz2_EK5EQ-unsplash.jpg"
  },
  {
    id: 4,
    name: "White Cap",
    price: 450,
    category: "Headwear",
    image: "/mediamodifier-DT7ercyDWjs-unsplash.jpg"
  },
  {
    id: 5,
    name: "Bio-Metric Gloves",
    price: 120,
    category: "Accessories",
    image: "/possessed-photography-jIBMSMs4_kA-unsplash.jpg"
  },
  {
    id: 6,
    name: "Cyber-Goggles",
    price: 75,
    category: "Eyewear",
    image: "/soheb-zaidi-oz3olAo3axw-unsplash.jpg"
  },
  {
    id: 7,
    name: "Bag",
    price: 45,
    category: "Bags",
    image: "/utopia-by-cho-SbfmmStJVeg-unsplash.jpg"
  },
  {
    id: 8,
    name: "Boots",
    price: 180,
    category: "Footwear",
    image: "/zac-wolff-esxf7PJmExQ-unsplash.jpg"
  }
];

export default function ProductGrid() {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <h2 className="font-display text-5xl font-black uppercase tracking-tighter md:text-7xl">
              Featured <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Gear</span>
            </h2>
            <p className="mt-4 text-2xl font-bold border-l-4 border-[#c27d7d] pl-4">The latest tech-wear for the next generation.</p>
          </div>
          <button className="hidden md:block font-black text-xl underline underline-offset-8 hover:text-[#c27d7d] transition-all hover:translate-x-2">
            VIEW ALL PRODUCTS
          </button>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 group/container">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 100, rotate: idx % 2 === 0 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: idx * 0.1
              }}
              className="group brutalist-card flex flex-col overflow-hidden hover:z-30 transition-all duration-300 group-hover/container:opacity-50 hover:!opacity-100"
            >
              <div className="relative aspect-[4/5] border-b-3 border-black overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="absolute top-4 right-4 p-3 bg-white border-2 border-black hover:bg-[#c27d7d] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Heart size={20} />
                </motion.button>
                <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-1 font-black text-sm uppercase tracking-widest">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-black mb-2 group-hover:text-black transition-colors">{product.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-3xl font-black tracking-tighter">${product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="brutalist-button brutalist-button-primary p-3"
                  >
                    <Plus size={28} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
