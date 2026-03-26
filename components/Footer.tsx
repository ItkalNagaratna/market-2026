'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-4xl font-black tracking-tighter mb-6">
              NEO<span className="bg-white px-1 text-black">MARKET</span>
            </div>
            <p className="text-xl font-bold text-gray-400 max-w-md">
              Centralized dashboard for the future of apparel. Curating the megacity's finest tech-wear and cybernetic upgrades. Established 2026.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6 uppercase">Navigation</h4>
            <ul className="space-y-4 font-bold text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6 uppercase">Connect</h4>
            <ul className="space-y-4 font-bold text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Neural Net</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Holo-Gram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meta-X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-bold">
          <p>© 2026 NEOMARKET CORP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
