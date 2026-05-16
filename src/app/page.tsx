import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { ShieldCheck, Clock, Recycle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-white">
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10" />
      
      <Navbar />
      <Hero />
      
      {/* Prime-style Client Logos / Stats Row */}
      <div className="border-y border-white/5 py-12 bg-zinc-950/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            <TrustStat icon={ShieldCheck} text="Fully Insured" />
            <TrustStat icon={Clock} text="Same-Day Service" />
            <TrustStat icon={Recycle} text="70% Recycled" />
            <TrustStat icon={ShieldCheck} text="Licensed & Bonded" />
          </div>
        </div>
      </div>

      <ServicesOverview />

      {/* Featured Testimonial Style Section */}
      <section className="py-32 slanted-bg bg-zinc-900/20">
        <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs">Customer Voice</h4>
          <h3 className="text-4xl md:text-5xl font-black italic chrome-title">"BEST JUNK SERVICE IN GREELEY."</h3>
          <div className="max-w-3xl mx-auto p-12 bg-zinc-950 border border-white/5 space-y-6">
            <p className="text-xl text-muted-foreground italic font-medium leading-relaxed">
              "Archie and his crew were phenomenal. They took care of a full garage cleanout in under 3 hours. Professional, fast, and the price was exactly what they quoted from the photos."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-full" />
              <div className="text-left">
                <p className="font-black uppercase italic text-sm">John D.</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Greeley Resident</p>
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

function TrustStat({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-primary" />
      <span className="font-black text-xs italic uppercase tracking-widest">{text}</span>
    </div>
  );
}
