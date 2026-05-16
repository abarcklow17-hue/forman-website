import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { Truck, CheckCircle, Zap, ShieldCheck, Award, Recycle, Clock, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-white">
      <div className="noise" />
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10" />
      
      <Navbar />
      <Hero />
      
      {/* High-Impact Trust Banner */}
      <div className="bg-primary/10 border-y border-white/5 py-8 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="font-black text-xl italic uppercase tracking-tighter">Licensed & Bonded</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-primary" />
            <span className="font-black text-xl italic uppercase tracking-tighter">Same-Day Service</span>
          </div>
          <div className="flex items-center gap-3">
            <Recycle className="w-8 h-8 text-primary" />
            <span className="font-black text-xl italic uppercase tracking-tighter">70% Recycled</span>
          </div>
        </div>
      </div>

      <ServicesOverview />

      {/* Benefits Section - Outdoing Competitor Content */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">The Forman Advantage</h2>
              <h3 className="text-5xl md:text-7xl leading-[0.9] chrome-text">
                WE DO THE HEAVY <br/> LIFTING, SO <br/> YOU DON'T.
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Greeley Junk Removal and Hauling is a local company that services the entire Northern Colorado area. Our 14 years of service have allowed us to work with homeowners who need professional hauling services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {[
                  { title: "Price Challenge", desc: "We challenge any written quote from licensed competitors." },
                  { title: "Eco-Friendly", desc: "Over 70% of items are donated or recycled to save landfills." },
                  { title: "14+ Years", desc: "Local experts who know Greeley inside and out." },
                  { title: "Quick Response", desc: "Text a photo and get a response in minutes, not hours." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <h4 className="font-black text-lg uppercase italic">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="industrial-card p-12 space-y-8 border-primary/20 bg-gradient-to-br from-zinc-900 to-black">
                <h4 className="text-3xl font-black italic uppercase text-primary">How It Works</h4>
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Contact Us", desc: "Call, text, or use our site to tell us about your project." },
                    { step: "02", title: "Free Quote", desc: "We'll review your photos or visit on-site for a firm estimate." },
                    { step: "03", title: "Job Done", desc: "We haul it all away and leave your space fresh and clean." }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6 items-start relative">
                      <span className="text-4xl font-black text-white/10 italic leading-none">{s.step}</span>
                      <div className="space-y-2">
                        <h5 className="text-xl font-black uppercase italic tracking-tighter">{s.title}</h5>
                        <p className="text-muted-foreground text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <Link href="/estimate" className="metal-button w-full block text-center text-white">
                    Request Your Free Quote
                  </Link>
                </div>
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