import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { Truck, CheckCircle, Clock, Award, Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'owner-archie');

  return (
    <main className="min-h-screen bg-background relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <section className="py-12 border-y-4 border-black bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <span className="font-headline font-black text-2xl tracking-tighter italic">FULLY LICENSED</span>
            <span className="font-headline font-black text-2xl tracking-tighter italic">INSURED</span>
            <span className="font-headline font-black text-2xl tracking-tighter italic">VETERAN OWNED</span>
            <span className="font-headline font-black text-2xl tracking-tighter italic">GREELEY LOCAL</span>
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Services Box Block */}
      <section className="py-24 bg-[#f0f0f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="brutal-card space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-black text-white px-4 py-1 font-black text-xs">MOBILE JUNK REMOVAL SERVICE</div>
                <h2 className="text-5xl font-black leading-none">SERVICES BUILT <br/>FOR THE JOB</h2>
              </div>
              <p className="text-xl font-medium leading-relaxed">
                Three core cleanup crews for homes, businesses, and construction sites across Northern Colorado. No job is too dirty or too heavy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary shrink-0" />
                  <span className="font-bold">HOUSEHOLD FURNITURE</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary shrink-0" />
                  <span className="font-bold">ELECTRONICS RECYCLING</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary shrink-0" />
                  <span className="font-bold">MATTRESS DISPOSAL</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary shrink-0" />
                  <span className="font-bold">RESIDENTIAL CLUTTER</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-video lg:aspect-auto">
              <div className="brutal-card-red h-full flex flex-col justify-center">
                <MapPin className="w-16 h-16 mb-6" />
                <h3 className="text-4xl mb-4">SERVING GREELEY, CO <br/>AND SURROUNDING AREAS</h3>
                <p className="text-xl font-bold opacity-90">
                  Fort Collins, Loveland, Windsor, Evans, Milliken, and everywhere in between. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto brutal-card">
            <h4 className="text-sm font-black text-primary mb-4">LOCAL TRUST</h4>
            <p className="text-3xl md:text-4xl font-black italic mb-8">
              "Forman & Co handled our office cleanout without slowing down our workday. Professional, fast, and fair pricing."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full" />
              <div>
                <p className="font-black">JENNIFER L.</p>
                <p className="text-xs font-bold text-muted-foreground uppercase">NORTHERN COLORADO</p>
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
