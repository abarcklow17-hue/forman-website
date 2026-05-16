import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { ShieldCheck, Clock, Recycle, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative selection:bg-primary selection:text-white">
      <div className="noise-overlay" />
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10 opacity-30" />
      
      <Navbar />
      <Hero />
      
      {/* Brand Stat Row */}
      <div className="border-y border-white/5 py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-16 md:gap-12">
            <TrustStat icon={ShieldCheck} label="FULLY INSURED" sub="PROPERTY PROTECTED" />
            <TrustStat icon={Clock} label="SAME-DAY" sub="GUARANTEED QUOTE" />
            <TrustStat icon={Recycle} label="ECO-FRIENDLY" sub="70% RECYCLED" />
            <TrustStat icon={CheckCircle} label="GREELEY LOCAL" sub="FAMILY OWNED" />
          </div>
        </div>
      </div>

      <ServicesOverview />

      {/* Cinematic Testimonial Section */}
      <section className="py-56 slanted-bg bg-[#050505]">
        <div className="container mx-auto px-4 text-center space-y-24 relative z-10">
          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase tracking-[0.8em] text-[11px]">CLIENT DISCOVERY</h4>
            <h3 className="text-6xl md:text-9xl font-black italic chrome-title uppercase leading-[0.85] tracking-tighter">"PROFESSIONAL. <br/>FAST. RUGGED."</h3>
          </div>
          
          <div className="max-w-5xl mx-auto p-24 metallic-card backdrop-blur-3xl relative group">
            <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-primary" />
            
            <p className="text-3xl text-muted-foreground italic font-black leading-tight mb-16 uppercase tracking-tighter">
              "ARCHIE AND THE CREW ARE UNMATCHED. THEY CLEARED A MULTI-LOAD GARAGE IN UNDER 3 HOURS. CLEAN, FAST, AND THE PRICE WAS HONORED AS QUOTED."
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-16 bg-primary flex items-center justify-center font-black italic text-white text-xl">JD</div>
              <div className="text-left">
                <p className="font-black uppercase italic text-lg tracking-widest text-white">JOHN D.</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-[0.4em] font-black">GREELEY, CO RESIDENT</p>
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

function TrustStat({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-16 h-16 metallic-card flex items-center justify-center group-hover:border-primary transition-all">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="font-black text-lg italic uppercase tracking-tighter text-white">{label}</span>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">{sub}</span>
      </div>
    </div>
  );
}