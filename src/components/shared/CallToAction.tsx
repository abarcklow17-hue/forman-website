import { ArrowRight, Send, Phone } from 'lucide-react';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="py-48 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center space-y-16 relative z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs italic">READY TO HAUL?</h4>
          <h2 className="text-5xl md:text-9xl font-bold italic chrome-title uppercase leading-[0.85] tracking-tighter">
            RECLAIM YOUR <span className="text-primary">SPACE.</span>
          </h2>
          <p className="text-muted-foreground text-base font-medium uppercase tracking-[0.1em] max-w-xl mx-auto py-6">
            Greeley's most trusted crew is standing by. Get a guaranteed quote today and let us handle the heavy lifting.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/estimate" className="btn-premium px-16 py-6 text-sm tracking-[0.4em] h-auto w-full md:w-auto">
            GET A QUOTE
          </Link>
          <a href="tel:9704007357" className="h-20 px-12 border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-4 text-white font-bold uppercase tracking-widest text-[11px] italic w-full md:w-auto">
            <Phone className="w-4 h-4 text-primary" /> CONTACT US NOW
          </a>
        </div>
      </div>
    </section>
  );
}
