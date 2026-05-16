"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Trash2, Loader2, Send, CheckCircle, Info, MapPin } from 'lucide-react';
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
    
    // Simulate Email Submission Logic
    console.log("Sending Quote Email to: formanandco@gmail.com", { ...formData, photosCount: photos.length });
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Quote Request Sent!",
        description: "Archie will personally review your photos and contact you shortly.",
      });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-64 pb-24 text-center">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="w-32 h-32 bg-primary mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(183,18,18,0.4)]">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl chrome-text uppercase italic leading-none">THANK YOU.</h1>
            <p className="text-xl font-bold text-muted-foreground uppercase tracking-tight">
              Archie has received your discovery request. Expect a call or text at <span className="text-primary">{formData.phone}</span> shortly.
            </p>
            <Button asChild size="lg" className="btn-premium px-12 py-6 h-auto text-sm">
              <a href="/">RETURN HOME</a>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10 opacity-30" />
      <Navbar />
      <div className="container mx-auto px-4 pt-48 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Discovery Call</h4>
              <h1 className="text-6xl md:text-8xl chrome-text leading-[0.85] uppercase italic">REQUEST A <br/><span className="text-primary">FREE QUOTE</span></h1>
              <p className="text-xl text-muted-foreground font-medium uppercase tracking-tight max-w-xl leading-relaxed">
                Send photos for an instant firm price. Guaranteed to beat any licensed competitor's written estimate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground italic">Full Name</Label>
                  <input 
                    required
                    placeholder="ENTER NAME" 
                    className="discovery-input w-full px-6 bg-zinc-950 border-white/5 h-16 text-sm font-bold uppercase tracking-widest text-white focus:border-primary transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground italic">Phone Number</Label>
                  <input 
                    required
                    type="tel"
                    placeholder="ENTER PHONE" 
                    className="discovery-input w-full px-6 bg-zinc-950 border-white/5 h-16 text-sm font-bold uppercase tracking-widest text-white focus:border-primary transition-colors"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground italic">Location / ZIP</Label>
                  <input 
                    required
                    placeholder="E.G. GREELEY, 80631" 
                    className="discovery-input w-full px-6 bg-zinc-950 border-white/5 h-16 text-sm font-bold uppercase tracking-widest text-white focus:border-primary transition-colors"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground italic">Project Detail</Label>
                  <input 
                    required
                    placeholder="E.G. GARAGE CLEANOUT" 
                    className="discovery-input w-full px-6 bg-zinc-950 border-white/5 h-16 text-sm font-bold uppercase tracking-widest text-white focus:border-primary transition-colors"
                    value={formData.project}
                    onChange={e => setFormData({...formData, project: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground italic">Visual Assets (Photos)</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {photos.map((photo, idx) => (
                    <div key={idx} className="relative aspect-square border border-white/10 overflow-hidden group">
                      <Image src={photo} alt="Upload" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                      >
                        <Trash2 className="w-8 h-8 text-white" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/5 transition-all text-muted-foreground hover:text-primary hover:border-primary">
                    <input type="file" className="hidden" multiple accept="image/*" onChange={handlePhotoUpload} />
                    <Camera className="w-10 h-10" />
                    <span className="text-[9px] font-black uppercase tracking-tighter">ADD PHOTO</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full py-6 text-sm tracking-[0.4em] flex items-center justify-center gap-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> SUBMITTING REQUEST...
                  </>
                ) : (
                  <>
                    SUBMIT DISCOVERY FORM <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          <aside className="space-y-12">
            <div className="bg-zinc-950 p-10 border border-white/5 space-y-8 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <h5 className="font-black uppercase italic tracking-[0.2em] text-white">Direct Line</h5>
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">TEXT PHOTOS TO:</p>
                <a href="tel:9704007357" className="text-3xl font-black italic text-white hover:text-primary transition-colors leading-none block underline decoration-primary underline-offset-8 decoration-2">
                  (970) 400-7357
                </a>
              </div>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">OWNER DIRECT EMAIL:</p>
                <a href="mailto:formanandco@gmail.com" className="text-sm font-black italic text-white hover:text-primary transition-colors block">
                  formanandco@gmail.com
                </a>
              </div>
            </div>

            <div className="p-10 border border-white/5 space-y-6">
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Why Forman & Co?</h5>
              <ul className="space-y-4">
                {[
                  'GUARANTEED PRICE MATCH',
                  'SAME-DAY PICKUP AVAILABLE',
                  'FULLY INSURED & BONDED',
                  '70% ECO-FRIENDLY RECYCLING'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest leading-none">
                    <div className="w-1 h-1 bg-primary" /> {item}
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
