"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Camera, Trash2, Loader2, Send, CheckCircle, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuotePage() {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          photos
        })
      });

      // Handle non-JSON responses (e.g. Vercel error pages)
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        throw new Error(`Server returned ${response.status}: not a JSON response`);
      }

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast({
          title: "QUOTE REQUEST SENT",
          description: "Archie has received your request and will contact you shortly.",
        });
      } else {
        throw new Error(result.error || 'Failed to send');
      }
    } catch (error: any) {
      const msg = error?.message || 'Unknown error';
      toast({
        title: "ERROR",
        description: `Failed to send: ${msg}. Please try calling us instead.`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 pt-72 pb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <div className="w-32 h-32 bg-primary mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(183,18,18,0.5)]">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Request Sent.</h1>
            <p className="text-xl font-medium text-muted-foreground">
              Archie will call <span className="text-primary font-bold">{formData.phone}</span> within the hour.
            </p>
            <Button asChild size="lg" className="btn-premium px-12 py-6 h-auto">
              <a href="/">BACK TO HOME</a>
            </Button>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-48 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Get A Firm Quote</h4>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Tell Us What <br/><span className="text-primary">Needs To Go.</span>
            </h1>
            <p className="text-muted-foreground text-base font-medium max-w-xl mx-auto">
              Send photos for an immediate, guaranteed price match quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
            {/* The "One Box" Form */}
            <form onSubmit={handleSubmit} className="metallic-card p-8 md:p-12 space-y-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-xs font-bold uppercase tracking-wider text-primary">1. Contact Info</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      required
                      placeholder="YOUR NAME" 
                      className="discovery-input w-full"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      required
                      type="tel"
                      placeholder="PHONE NUMBER" 
                      className="discovery-input w-full"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-bold uppercase tracking-wider text-primary">2. Project Location</Label>
                  <input 
                    required
                    placeholder="E.G. GREELEY, 80631" 
                    className="discovery-input w-full"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-bold uppercase tracking-wider text-primary">3. Project Details</Label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="DESCRIBE THE JUNK (E.G. GARAGE CLEANOUT, OLD FRIDGE, CONSTRUCTION DEBRIS...)" 
                    className="discovery-input w-full min-h-[120px] py-4"
                    value={formData.project}
                    onChange={e => setFormData({...formData, project: e.target.value})}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-bold uppercase tracking-wider text-primary">4. Upload Photos (Optional)</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {photos.map((photo, idx) => (
                      <div key={idx} className="relative aspect-square border border-white/10 metallic-card group overflow-hidden">
                        <Image src={photo} alt="Upload" fill className="object-cover" />
                        <button 
                          type="button"
                          onClick={() => removePhoto(idx)}
                          className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300"
                        >
                          <Trash2 className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    ))}
                    <label className="aspect-square border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/5 transition-all text-muted-foreground hover:text-primary hover:border-primary">
                      <input type="file" className="hidden" multiple accept="image/*" onChange={handlePhotoUpload} />
                      <Camera className="w-8 h-8" />
                      <span className="text-[8px] font-bold uppercase tracking-widest">ADD PHOTO</span>
                    </label>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full py-6 text-sm tracking-[0.4em] flex items-center justify-center gap-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> SENDING...
                  </>
                ) : (
                  <>
                    GET MY QUOTE <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Sidebar Contact */}
            <aside className="space-y-8">
              <div className="metallic-card p-8 space-y-8 border-l-4 border-l-primary">
                <h5 className="font-bold text-white text-lg">Direct Access</h5>
                <div className="space-y-4">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">TEXT PHOTOS TO:</p>
                  <a href="tel:9704007357" className="flex items-center gap-3 text-2xl font-bold italic text-white hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" /> (970) 400-7357
                  </a>
                </div>
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">EMAIL DIRECT:</p>
                  <a href="mailto:formanandco@gmail.com" className="flex items-center gap-3 text-sm font-bold italic text-white hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" /> formanandco@gmail.com
                  </a>
                </div>
              </div>

              <div className="metallic-card p-8 space-y-6">
                <h5 className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">CORE PROMISE</h5>
                <ul className="space-y-4">
                  {[
                    'PRICE MATCH GUARANTEE',
                    'SAME-DAY RESPONSE',
                    'FULLY INSURED TEAM',
                    'WELD COUNTY LOCAL'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[9px] font-bold text-white uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
