import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight">
            Ready to Reclaim Your Space?
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
            Book your free on-site estimate today. Our team is ready to haul away your stress, one load at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="h-16 px-10 text-lg font-bold shadow-xl">
              <Link href="/estimate" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Schedule Estimate
              </Link>
            </Button>
            <Button asChild size="lg" className="h-16 px-10 text-lg font-bold bg-white text-primary hover:bg-white/90 shadow-xl border-none">
              <a href="tel:9704007357" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> (970) 400-7357
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-white/60 font-bold uppercase tracking-widest">
            Serving Greeley • Fort Collins • Loveland • Windsor • Weld County
          </p>
        </div>
      </div>
    </section>
  );
}
