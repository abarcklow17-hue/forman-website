import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CallToAction } from '@/components/shared/CallToAction';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { ShieldCheck, Zap, Star, MapPin, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const cities = ['greeley-co', 'fort-collins-co', 'loveland-co', 'windsor-co', 'evans-co', 'johnstown-co', 'milliken-co', 'eaton-co', 'wellington-co'];
  return cities.map((city) => ({
    slug: `junk-removal-${city}`,
  }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const slugParts = slug.split('-');
  if (!slug.startsWith('junk-removal-') || slugParts.length < 3) {
    return notFound();
  }

  const cityName = slugParts.slice(2, -1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const fullCityName = `${cityName}, CO`;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* City Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <MapPin className="w-3 h-3" /> Serving {fullCityName}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Best Junk Removal in <br />
              <span className="text-primary">{fullCityName}.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Need junk gone today in {cityName}? Archie and the Forman & Co crew are Northern Colorado's most trusted haulers. Same-day service available for all residential and commercial cleanouts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="flex items-center gap-4 p-6 bg-card border border-white/5 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Same-Day Pickup</h4>
                  <p className="text-sm text-muted-foreground">Fastest service in {cityName}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-card border border-white/5 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Fully Insured</h4>
                  <p className="text-sm text-muted-foreground">Your property is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* SEO Content Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Why Choose Forman & Co in {cityName}?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When you're looking for affordable junk removal in {fullCityName}, you want a team that shows up on time and handles the heavy lifting without making a mess. We specialize in property cleanouts, furniture disposal, and debris removal for local families and businesses.
              </p>
              <ul className="space-y-4">
                {[
                  `Transparent upfront pricing for ${cityName} residents`,
                  'Locally owned and operated - support local!',
                  'Eco-friendly disposal and recycling practices',
                  'Courteous, professional crew trained in safety',
                  'Single item pickups to multiple trailer loads'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle className="w-5 h-5 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-white/5 p-12 rounded-2xl space-y-8">
              <h3 className="text-2xl font-bold">Items We Haul in {cityName}</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Mattresses</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Appliances</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Old Furniture</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Yard Waste</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Construction Debris</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Hot Tubs</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Electronics</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Office Junk</span>
              </div>
              <p className="text-sm text-muted-foreground">
                *Don't see your item? Give Archie a call. We haul almost everything except hazardous materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
