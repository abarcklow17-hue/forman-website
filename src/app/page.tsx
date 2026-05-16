import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { Truck, CheckCircle, Zap, ShieldCheck, Award, Scale, Recycle, Banknote } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <Navbar />
      <Hero />
      
      {/* Ticker Tape - High Impact */}
      <div className="bg-black text-white py-6 overflow-hidden border-y-4 border-black whitespace-nowrap">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-12 items-center">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex gap-12 items-center">
              <span className="font-black text-3xl italic tracking-tighter uppercase text-primary">PRICE MATCH GUARANTEE</span>
              <span className="font-black text-3xl italic tracking-tighter uppercase">SAME-DAY SERVICE</span>
              <span className="font-black text-3xl italic tracking-tighter uppercase text-primary">VETERAN OWNED</span>
              <span className="font-black text-3xl italic tracking-tighter uppercase">70% RECYCLED</span>
            </div>
          ))}
        </div>
      </div>

      <ServicesOverview />

      {/* Why We Beat the "Other Guys" - Competition Killer Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] italic">The Forman Advantage</h2>
            <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">WHY WE <span className="text-primary italic">WIN.</span></h3>
            <p className="text-xl font-bold text-zinc-500">We don't just haul junk; we provide a premium service that costs less than the corporate franchises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "PRICE BEAT", 
                desc: "We will challenge any licensed competitor's written price. Guaranteed.", 
                icon: Banknote,
                color: "bg-primary"
              },
              { 
                title: "70% ECO-SAVE", 
                desc: "Over 70% of what we haul is donated or recycled. We protect Colorado.", 
                icon: Recycle,
                color: "bg-black"
              },
              { 
                title: "MASTER HAULERS", 
                desc: "14+ years of local experience. We've seen and hauled it all.", 
                icon: Award,
                color: "bg-primary"
              },
              { 
                title: "SAME DAY", 
                desc: "Call before noon, and we're usually there by sunset. No waiting.", 
                icon: Zap,
                color: "bg-black"
              }
            ].map((item, i) => (
              <div key={i} className="brutal-card p-8 space-y-6 group hover:-translate-y-2 transition-transform">
                <div className={`${item.color} w-16 h-16 flex items-center justify-center brutal-border`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-black italic uppercase tracking-tighter">{item.title}</h4>
                <p className="font-bold text-zinc-600 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section className="py-24 bg-zinc-100 border-b-8 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -rotate-12 translate-x-20 -translate-y-20 font-black text-[200px] pointer-events-none">$</div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
                UPFRONT <br/> <span className="text-primary">NO-B.S.</span> PRICING
              </h3>
              <p className="text-xl font-bold text-zinc-600">
                Our rates are consistently 40% lower than national franchises. You pay for the space you use, not the fancy logo on the side of a corporate truck.
              </p>
              <ul className="space-y-4">
                {[
                  "No hidden disposal fees",
                  "Labor and gas included",
                  "Free on-site guaranteed estimates",
                  "Licensed, Bonded, and Fully Insured"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-black uppercase italic tracking-tight">
                    <CheckCircle className="w-5 h-5 text-primary" /> {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="brutal-card-red p-12 space-y-6">
              <h4 className="text-3xl font-black italic uppercase">FULL LOAD SPECIAL</h4>
              <p className="text-6xl font-black">$650 <span className="text-sm font-bold align-middle">/ 14ft Truck</span></p>
              <p className="font-bold text-white/80">
                Our largest commercial truck handles 600 cubic feet of debris. Perfect for estate cleanouts or construction sites.
              </p>
              <div className="pt-4">
                <Link href="/estimate" className="w-full h-16 bg-white text-black brutal-border flex items-center justify-center font-black uppercase text-xl hover:bg-zinc-100">
                  GET YOUR FREE QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
      <SmartConcierge />
    </main>
  );
}
