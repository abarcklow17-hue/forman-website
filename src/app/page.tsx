import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { Truck, CheckCircle, Clock, Award, Star, MapPin, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <Navbar />
      <Hero />
      
      {/* Ticker Tape */}
      <div className="bg-black text-white py-6 overflow-hidden border-y-4 border-black whitespace-nowrap">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-12 items-center">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex gap-12 items-center">
              <span className="font-black text-3xl italic tracking-tighter uppercase text-primary">FULLY LICENSED</span>
              <span className="font-black text-3xl italic tracking-tighter uppercase">INSURED</span>
              <span className="font-black text-3xl italic tracking-tighter uppercase text-primary">VETERAN OWNED</span>
              <span className="font-black text-3xl italic tracking-tighter uppercase">GREELEY LOCAL</span>
            </div>
          ))}
        </div>
      </div>

      <ServicesOverview />

      {/* Trust Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary mx-auto brutal-border flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-black italic">SECURE & SAFE</h4>
              <p className="font-bold text-zinc-500">Fully insured operations protecting your property from start to finish.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-black mx-auto brutal-border flex items-center justify-center">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-2xl font-black italic">FAST RESPONSE</h4>
              <p className="font-bold text-zinc-500">Same-day service available across Greeley and Weld County area.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-zinc-200 mx-auto brutal-border flex items-center justify-center">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h4 className="text-2xl font-black italic">PREMIUM QUALITY</h4>
              <p className="font-bold text-zinc-500">A clean-cut crew that values your time and maintains a professional site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="py-12 border-y-8 border-black bg-zinc-100 overflow-hidden">
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
          {PlaceHolderImages.slice(0, 4).map((img, i) => (
            <div key={i} className="min-w-[400px] h-[300px] brutal-card p-0 relative grayscale hover:grayscale-0 transition-all cursor-pointer">
              <Image src={img.imageUrl} alt={img.description} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
      <Footer />
      <SmartConcierge />
    </main>
  );
}