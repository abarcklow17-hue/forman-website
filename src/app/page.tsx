
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { ShieldCheck, Clock, Recycle, CheckCircle, Info, XCircle, MapPin, Truck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10 opacity-30" />
      
      <Navbar />
      <Hero />
      
      {/* Trust Bar - Local SEO Trust Factors */}
      <section className="border-y border-white/10 bg-zinc-950 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustStat icon={ShieldCheck} label="LICENSED & INSURED" sub="FULL PROPERTY PROTECTION" />
            <TrustStat icon={Recycle} label="70% RECYCLED" sub="ECO-FRIENDLY DISPOSAL" />
            <TrustStat icon={Clock} label="SAME-DAY SERVICE" sub="FAST LOCAL RESPONSE" />
            <TrustStat icon={CheckCircle} label="FREE QUOTES" sub="NO HIDDEN FEES" />
          </div>
        </div>
      </section>

      {/* How It Works - 1-2-3 Process */}
      <section className="py-32 bg-black overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">THE PROCESS</h4>
            <h2 className="text-5xl md:text-7xl chrome-title uppercase leading-none tracking-tighter">HOW IT WORKS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <StepItem 
              num="01" 
              title="CONTACT US" 
              desc="Call, text, or use our website to tell us about your project. Sending photos is the fastest way to get an accurate quote."
             />
             <StepItem 
              num="02" 
              title="GET A QUOTE" 
              desc="Archie will provide a transparent, onsite or photo-based quote that we honor for 30 days. No pressure, just honest rates."
             />
             <StepItem 
              num="03" 
              title="WE HAUL IT ALL" 
              desc="Our rugged crew arrives on time, handles all the heavy lifting, and sweeps up. You reclaim your space instantly."
             />
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* What We Take vs Don't Take - Scannable SEO Content */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="metallic-card p-12 space-y-8">
              <div className="flex items-center gap-4 text-primary">
                <CheckCircle className="w-8 h-8" />
                <h3 className="text-3xl font-bold">WE HAUL ALMOST EVERYTHING</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Old Furniture</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Appliances</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Construction Debris</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Mattresses</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Yard Waste</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Hot Tubs</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Scrap Metal</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Office Equipment</div>
              </div>
            </div>

            <div className="metallic-card p-12 space-y-8 border-red-900/20">
              <div className="flex items-center gap-4 text-zinc-500">
                <XCircle className="w-8 h-8" />
                <h3 className="text-3xl font-bold text-white">PROHIBITED ITEMS</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2"> Hazardous Chemicals</div>
                <div className="flex items-center gap-2"> Wet Paint & Oils</div>
                <div className="flex items-center gap-2"> Biohazard Materials</div>
                <div className="flex items-center gap-2"> Dead Bodies/Sludge</div>
                <div className="flex items-center gap-2"> Explosives</div>
                <div className="flex items-center gap-2"> Radioactive Materials</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Block - Regional Targeting */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">LOCAL SERVICE AREAS</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase italic tracking-tighter">SERVING GREELEY & ALL OF WELD COUNTY</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Based in <strong>Greeley, Colorado</strong>, Forman & Co is a locally-owned family business dedicated to keeping <strong>Northern Colorado</strong> clean. We provide professional junk removal and hauling services for residents and businesses in <strong>Windsor, Evans, Eaton, Fort Collins, Loveland</strong>, and across the entire <strong>Weld County</strong> region. Our crew knows the area inside and out, ensuring fast arrival and responsible disposal at local recycling centers and donation hubs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <MapPin className="w-4 h-4 text-primary" /> WELD COUNTY
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <MapPin className="w-4 h-4 text-primary" /> LARIMER COUNTY
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <MapPin className="w-4 h-4 text-primary" /> NORTHERN COLORADO
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

function TrustStat({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 metallic-card flex items-center justify-center border-accent/20">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base text-white leading-tight uppercase tracking-tight">{label}</span>
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{sub}</span>
      </div>
    </div>
  );
}

function StepItem({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="metallic-card p-10 space-y-6 group hover:border-primary transition-all duration-500">
      <div className="flex items-center justify-between">
        <span className="text-5xl font-bold text-primary italic opacity-50 group-hover:opacity-100 transition-opacity">{num}</span>
        <Truck className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
