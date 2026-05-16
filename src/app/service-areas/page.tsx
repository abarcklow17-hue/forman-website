import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CallToAction } from '@/components/shared/CallToAction';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const areas = [
  { name: 'Greeley', slug: 'greeley-co' },
  { name: 'Fort Collins', slug: 'fort-collins-co' },
  { name: 'Loveland', slug: 'loveland-co' },
  { name: 'Windsor', slug: 'windsor-co' },
  { name: 'Evans', slug: 'evans-co' },
  { name: 'Johnstown', slug: 'johnstown-co' },
  { name: 'Milliken', slug: 'milliken-co' },
  { name: 'Eaton', slug: 'eaton-co' },
  { name: 'Wellington', slug: 'wellington-co' },
];

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Serving <span className="text-primary italic">Northern Colorado.</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Based in Greeley, Archie and the crew travel across Weld and Larimer County to help you reclaim your space. We offer same-day service to most areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link 
                key={area.slug}
                href={`/junk-removal-${area.slug}`}
                className="group p-10 bg-card border border-white/5 rounded-xl hover:border-primary/50 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Junk Removal in {area.name}</h2>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Providing fast, professional junk hauling and property cleanout services for residential and commercial customers in {area.name}, CO.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform">
                  View Local Services <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
