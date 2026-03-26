'use client';

import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Testimonials from '@/components/Testimonials';
import MoreInfo from '@/components/MoreInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProductGrid />
      <Testimonials />
      <MoreInfo />
      <Footer />
    </main>
  );
}
