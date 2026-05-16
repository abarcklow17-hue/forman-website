import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Ready to Haul?</h4>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Reclaim Your <span className="text-primary">Space.</span>
          </h2>
          <p className="text-muted-foreground text-base font-medium max-w-xl mx-auto py-4">
            Greeley's most trusted crew is standing by. Get a guaranteed quote today and let us handle the heavy lifting.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/estimate" className="btn-premium px-12 py-5 text-sm font-semibold tracking-wider w-full sm:w-auto text-center flex items-center justify-center gap-3">
            Get A Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:9704007357" className="h-16 px-10 border border-white/10 bg-zinc-900 hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 text-white font-semibold text-sm w-full sm:w-auto rounded-md">
            <Phone className="w-4 h-4 text-primary" /> (970) 400-7357
          </a>
        </div>
      </div>
    </section>
  );
}
