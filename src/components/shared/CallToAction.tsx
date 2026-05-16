import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden border-y-4 border-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
            READY TO <br/>RECLAIM SPACE?
          </h2>
          <p className="text-xl text-white font-bold max-w-2xl mx-auto italic">
            Book your free on-site estimate today. Our team is ready to haul away your stress, one load at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button asChild size="lg" className="h-20 px-12 text-2xl font-black uppercase brutal-border bg-white text-black hover:bg-white/90">
              <Link href="/estimate">
                Get A Quote
              </Link>
            </Button>
            <Button asChild size="lg" className="h-20 px-12 text-2xl font-black uppercase brutal-border bg-black text-white hover:bg-black/80">
              <a href="tel:9704007357">
                Call Archie
              </a>
            </Button>
          </div>
          
          <p className="text-xs text-white font-black uppercase tracking-[0.3em]">
            Greeley • Fort Collins • Loveland • Windsor • Weld County
          </p>
        </div>
      </div>
    </section>
  );
}
