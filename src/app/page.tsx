import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { ShieldCheck, Clock, Recycle, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-white">
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10 opacity-30" />
      
      <Navbar />
      <Hero />
      
      {/* Brand Stat Row */}
      <div className="border-y border-white/5 py-16 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8">
            <TrustStat icon={ShieldCheck} label="Fully Insured" sub="Property Protected" />
            <TrustStat icon={Clock} label="Same-Day" sub="Fast Response" />
            <TrustStat icon={Recycle} label="Eco-Focused" sub="70% Recycled" />
            <TrustStat icon={CheckCircle} label="Greeley Local" sub="Family Owned" />
          </div>
        </div>
      </div>

      <ServicesOverview />

      {/* Featured Testimonial Section */}
      <section className="py-40 slanted-bg bg-zinc-900/10">
        <div className="container mx-auto px-4 text-center space-y-16 relative z-10">
          <div className="space-y-4">
            <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">Testimonials</h4>
            <h3 className="text-5xl md:text-7xl font-black italic chrome-title uppercase leading-[0.9]">"Professional. <br/>Fast. Reliable."</h3>
          </div>
          
          <div className="max-w-4xl mx-auto p-16 bg-zinc-950/80 border border-white/5 backdrop-blur-xl relative group">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary" />
            
            <p className="text-2xl text-muted-foreground italic font-medium leading-relaxed mb-12">
              "Archie and his crew were phenomenal. They took care of a full garage cleanout in under 3 hours. Professional, fast, and the price was exactly what they quoted from the photos."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-black italic text-primary">JD</div>
              <div className="text-left">
                <p className="font-black uppercase italic text-sm tracking-widest text-white">John D.</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Greeley, CO Resident</p>
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
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="font-black text-sm italic uppercase tracking-wider text-white">{label}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{sub}</span>
      </div>
    </div>
  );
}
