import { ArrowRight, Send } from 'lucide-react';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="py-48 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center space-y-20 relative z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">Start Hauling</h4>
          <h2 className="text-5xl md:text-9xl font-black italic chrome-title uppercase leading-[0.85] tracking-tighter">
            READY TO RECLAIM <br/> YOUR <span className="text-primary">SPACE?</span>
          </h2>
          <p className="text-muted-foreground text-sm font-bold uppercase tracking-[0.3em] max-w-xl mx-auto py-8">
            Experience premium service. Guaranteed quotes. Same-day hauls. Support local family-owned business.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link href="/estimate" className="btn-premium px-16 py-6 text-sm tracking-[0.4em] h-auto w-full md:w-auto">
            GET A FREE QUOTE
          </Link>
          <a href="tel:9704007357" className="h-20 px-12 border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-4 text-white font-black uppercase tracking-widest text-xs italic w-full md:w-auto">
            <Send className="w-5 h-5 text-primary" /> TEXT ARCHIE NOW
          </a>
        </div>
      </div>
    </section>
  );
}
