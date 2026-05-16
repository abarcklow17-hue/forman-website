
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CallToAction } from '@/components/shared/CallToAction';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CheckCircle, Truck, Box, HardHat, Recycle, Trash2, Hammer } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const detailedServices = [
  { 
    title: 'RESIDENTIAL CLEANOUTS', 
    desc: 'From single-car garages to full estate cleanouts, we handle the heavy lifting so you don\'t have to.',
    image: 'garage-cleanout'
  },
  { 
    title: 'CONSTRUCTION DEBRIS', 
    desc: 'We haul drywall, wood, metal, and roofing materials from your job site efficiently.',
    image: 'construction-debris'
  },
  { 
    title: 'APPLIANCE RECYCLING', 
    desc: 'Eco-friendly disposal of fridges, stoves, and washers. We ensure they are recycled responsibly.',
    image: 'appliance-haul'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Services Hero */}
      <section className="relative pt-48 pb-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <h4 className="text-primary font-bold uppercase tracking-[0.5em] text-xs italic">OUR CAPABILITIES</h4>
            <h1 className="text-6xl md:text-9xl font-bold chrome-text leading-[0.85] uppercase italic tracking-tighter">
              FULL-SERVICE <br/><span className="text-primary">HAULING.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl uppercase tracking-tight">
              PRO-GRADE EQUIPMENT. PROFESSIONAL CREW. GUARANTEED PRICE MATCH ON ALL LICENSED COMPETITORS.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {detailedServices.map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
                <div className="flex-1 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-bold italic text-white uppercase tracking-tighter">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.desc} Our team is trained in safety and efficiency, ensuring your property is protected while we clear your space.
                  </p>
                  <ul className="space-y-4">
                    {['On-site Estimates', 'Same-day Service', 'Eco-friendly Disposal'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-[4/3] relative metallic-card overflow-hidden">
                   <Image 
                    src={PlaceHolderImages.find(img => img.id === service.image)?.imageUrl || ''} 
                    alt={service.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesOverview />
      <CallToAction />
      <Footer />
    </main>
  );
}
