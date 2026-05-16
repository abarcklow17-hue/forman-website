
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Background Cinematic Image */}
      {heroImg && (
        <div className="absolute inset-0 -z-10">
          <Image 
            src={heroImg.imageUrl} 
            alt={heroImg.description}
            fill
            className="object-cover grayscale opacity-70"
            priority
            data-ai-hint={heroImg.imageHint}
          />
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px] z-10" />
          {/* Edge Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
        </div>
      )}

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-30 text-center space-y-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-morphism text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            <MapPin className="w-3.5 h-3.5" /> GREELEY & NORTHERN COLORADO
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-bold leading-[0.8] tracking-tighter italic uppercase chrome-text py-4">
            HAUL IT <br />
            <span className="text-primary italic">ALL.</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-tight">
            PROFESSIONAL MOBILE JUNK REMOVAL. <br />
            <span className="text-white italic">PREMIUM CLEANOUTS & ECO-RECYCLING.</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Link href="/estimate" className="btn-premium w-full sm:w-auto flex items-center justify-center gap-4 text-xs px-12 py-5">
            GET A QUOTE <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:9704007357" className="w-full sm:w-auto h-16 px-8 glass-morphism hover:bg-white/5 transition-all font-bold uppercase italic tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 text-white">
            <Phone className="w-4 h-4 text-primary" /> (970) 400-7357
          </a>
        </motion.div>
      </div>

      {/* Bottom Trim */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-40" />
    </section>
  );
}
