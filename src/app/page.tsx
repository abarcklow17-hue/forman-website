import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { Truck, CheckCircle, Clock, Award, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'owner-archie');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-headline font-bold text-2xl">LICENSED</span>
            <span className="font-headline font-bold text-2xl">INSURED</span>
            <span className="font-headline font-bold text-2xl">VETERAN OWNED</span>
            <span className="font-headline font-bold text-2xl">LOCAL 17YRS</span>
            <span className="font-headline font-bold text-2xl">TOP RATED</span>
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Junk Removal Made Simple</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We know you want it gone today. We've optimized our workflow to be as painless and professional as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-10 bg-card border border-white/5 rounded-xl group hover:border-primary/30 transition-all">
              <div className="absolute top-0 right-0 p-4 text-7xl font-bold text-white/5 select-none">01</div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Request a Quote</h4>
              <p className="text-muted-foreground leading-relaxed">
                Text us photos of your junk or use our AI estimator. We provide immediate upfront pricing with no hidden fees.
              </p>
            </div>

            <div className="relative p-10 bg-card border border-white/5 rounded-xl group hover:border-primary/30 transition-all">
              <div className="absolute top-0 right-0 p-4 text-7xl font-bold text-white/5 select-none">02</div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Schedule Pickup</h4>
              <p className="text-muted-foreground leading-relaxed">
                Choose a time that works for you. Our crew arrives on-time, ready to work, and treats your property with respect.
              </p>
            </div>

            <div className="relative p-10 bg-card border border-white/5 rounded-xl group hover:border-primary/30 transition-all">
              <div className="absolute top-0 right-0 p-4 text-7xl font-bold text-white/5 select-none">03</div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Enjoy Your Space</h4>
              <p className="text-muted-foreground leading-relaxed">
                We haul it all, sweep up the area, and ensure everything is disposed of or recycled responsibly. Job done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Archie Section */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                <Image 
                  src={aboutImg?.imageUrl || ''} 
                  alt="Archie Barcklow"
                  fill
                  className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="professional worker"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-xl shadow-2xl hidden md:block">
                  <p className="text-4xl font-bold text-white mb-1">10k+</p>
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest">Jobs Completed</p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Meet The Owner</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Local Expertise, <br /><span className="text-primary italic">Professional Integrity.</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm Archie, and I've spent the last 17 years building a reputation for reliability in Northern Colorado. Forman & Co isn't just a junk removal business; it's a service built on trust and hard work. 
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When you hire us, you're not getting a faceless franchise. You're getting a local team that cares about the community and your property.
              </p>
              <div className="pt-4 flex flex-wrap gap-12">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest">500+ Reviews</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Award className="w-5 h-5" />
                    <span className="text-lg">Licensed & Insured</span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Certified Professional</p>
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
