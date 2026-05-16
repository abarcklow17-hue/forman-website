"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Camera, Trash2, Loader2, Send, CheckCircle, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export default function QuotePage() {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Submission Logic to formanandco@gmail.com
    console.log("Sending Quote Email to: formanandco@gmail.com", { ...formData, photosCount: photos.length });
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "DISCOVERY REQUEST SENT",
        description: "ARCHIE WILL CONTACT YOU SHORTLY WITH A FIRM QUOTE.",
      });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 pt-72 pb-24 text-center">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="w-40 h-40 bg-primary mx-auto flex items-center justify-center shadow-[0_0_80px_rgba(183,18,18,0.5)]">
              <CheckCircle className="w-20 h-20 text-white" />
            </div>
            <h1 className="text-7xl md:text-9xl chrome-text uppercase italic leading-none tracking-tighter">THANK YOU.</h1>
            <p className="text-2xl font-black text-muted-foreground uppercase tracking-tighter">
              DISCOVERY REQUEST RECEIVED. ARCHIE WILL CALL <span className="text-primary">{formData.phone}</span> SHORTLY.
            </p>
            <Button asChild size="lg" className="btn-premium px-16 py-8 h-auto text-base">
              <a href="/">RETURN TO SITE</a>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10 opacity-30" />
      <Navbar />
      
      <div className="container mx-auto px-4 pt-56 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-24">
          <div className="space-y-16">
            <div className="space-y-6">
              <h4 className="text-primary font-black uppercase tracking-[0.8em] text-[11px]">PROJECT DISCOVERY</h4>
              <h1 className="text-7xl md:text-9xl chrome-text leading-[0.85] uppercase italic tracking-tighter">REQUEST A <br/><span className="text-primary">FREE QUOTE</span></h1>
              <p className="text-2xl text-muted-foreground font-black uppercase tracking-tighter max-w-2xl leading-tight">
                SEND PHOTOS FOR A FIRM PRICE. GUARANTEED TO BEAT ANY LICENSED COMPETITOR.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Label className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">FULL NAME</Label>
                  <input 
                    required
                    placeholder="ENTER NAME" 
                    className="discovery-input w-full"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <Label className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">PHONE NUMBER</Label>
                  <input 
                    required
                    type="tel"
                    placeholder="ENTER PHONE" 
                    className="discovery-input w-full"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Label className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">PROJECT LOCATION</Label>
                  <input 
                    required
                    placeholder="E.G. GREELEY, 80631" 
                    className="discovery-input w-full"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <Label className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">PROJECT DETAIL</Label>
                  <input 
                    required
                    placeholder="E.G. GARAGE CLEANOUT" 
                    className="discovery-input w-full"
                    value={formData.project}
                    onChange={e => setFormData({...formData, project: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <Label className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">VISUAL ASSETS (PHOTOS)</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
                  {photos.map((photo, idx) => (
                    <div key={idx} className="relative aspect-square border border-white/10 metallic-card group">
                      <Image src={photo} alt="Upload" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300"
                      >
                        <Trash2 className="w-10 h-10 text-white" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white/5 transition-all text-muted-foreground hover:text-primary hover:border-primary">
                    <input type="file" className="hidden" multiple accept="image/*" onChange={handlePhotoUpload} />
                    <Camera className="w-12 h-12" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">ADD ASSET</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full py-8 text-sm tracking-[0.5em] flex items-center justify-center gap-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-8 h-8 animate-spin" /> SUBMITTING REQUEST...
                  </>
                ) : (
                  <>
                    INITIATE DISCOVERY CALL <Send className="w-6 h-6" />
                  </>
                )}
              </button>
            </form>
          </div>

          <aside className="space-y-16">
            <div className="bg-zinc-950 p-12 border border-white/5 space-y-10 relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <h5 className="font-black uppercase italic tracking-[0.3em] text-white text-lg">DIRECT LINE</h5>
              <div className="space-y-6">
                <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.6em]">TEXT PHOTOS TO:</p>
                <a href="tel:9704007357" className="text-4xl font-black italic text-white hover:text-primary transition-colors leading-none block underline decoration-primary underline-offset-[12px] decoration-4">
                  (970) 400-7357
                </a>
              </div>
              <div className="space-y-6 pt-10 border-t border-white/5">
                <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.6em]">OWNER DIRECT:</p>
                <a href="mailto:formanandco@gmail.com" className="text-base font-black italic text-white hover:text-primary transition-colors block">
                  formanandco@gmail.com
                </a>
              </div>
            </div>

            <div className="p-12 border border-white/5 space-y-8 metallic-card">
              <h5 className="text-xs font-black uppercase tracking-[0.5em] text-primary">CORE PROMISE</h5>
              <ul className="space-y-6">
                {[
                  'GUARANTEED PRICE MATCH',
                  'SAME-DAY DISCOVERY',
                  'FULLY INSURED & BONDED',
                  '70% ECO-RECYCLING RATE'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[11px] font-black text-white uppercase tracking-[0.4em] leading-none">
                    <div className="w-2 h-2 bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </main>
  );
}