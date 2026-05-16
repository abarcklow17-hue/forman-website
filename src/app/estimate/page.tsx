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
    console.log("Sending Quote Email to: abarcklow17@gmail.com", { ...formData, photosCount: photos.length });
    
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
        <div className="container mx-auto px-4 pt-48 pb-24 text-center">
          <div className="max-w-2xl mx-auto industrial-card p-16 space-y-8">
            <div className="w-24 h-24 bg-primary mx-auto rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(183,18,18,0.5)]">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl chrome-text">THANK YOU!</h1>
            <p className="text-xl font-bold text-muted-foreground">
              Archie has received your request. Expect a call or text at <span className="text-primary">{formData.phone}</span> shortly with your guaranteed quote.
            </p>
            <Button asChild size="lg" className="metal-button">
              <a href="/">Return Home</a>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10" />
      <Navbar />
      <div className="container mx-auto px-4 pt-40 pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl chrome-text leading-none">GET YOUR <br/><span className="text-primary italic">FREE QUOTE</span></h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
              Fill out the form below or text your photos to <span className="text-primary">(970) 400-7357</span>. Get a guaranteed quote from the owner in minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="industrial-card p-8 md:p-12 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Name</Label>
                  <Input 
                    required
                    placeholder="John Doe" 
                    className="h-14 bg-zinc-900 border-white/10 text-lg font-bold"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                  <Input 
                    required
                    type="tel"
                    placeholder="(970) 555-0123" 
                    className="h-14 bg-zinc-900 border-white/10 text-lg font-bold"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Project Location (City/Zip)</Label>
                  <Input 
                    required
                    placeholder="Greeley, 80631" 
                    className="h-14 bg-zinc-900 border-white/10 text-lg font-bold"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email (Optional)</Label>
                  <Input 
                    type="email"
                    placeholder="john@example.com" 
                    className="h-14 bg-zinc-900 border-white/10 text-lg font-bold"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Upload Photos (Optional but recommended)</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {photos.map((photo, idx) => (
                    <div key={idx} className="relative aspect-square rounded-lg border border-white/10 overflow-hidden group">
                      <Image src={photo} alt="Upload" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                      >
                        <Trash2 className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square border-2 border-dashed border-white/10 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/5 transition-all text-muted-foreground hover:text-primary hover:border-primary">
                    <input type="file" className="hidden" multiple accept="image/*" onChange={handlePhotoUpload} />
                    <Camera className="w-8 h-8" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">Add Photo</span>
                  </label>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase italic tracking-widest">
                  <Info className="w-4 h-4 text-primary" />
                  Clear photos help Archie provide a precise quote faster.
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Project Details</Label>
                <Textarea 
                  required
                  placeholder="Tell us what needs to go. (e.g., 'Old couch and fridge in the garage, easy access.')"
                  className="min-h-[150px] bg-zinc-900 border-white/10 text-lg font-bold"
                  value={formData.project}
                  onChange={e => setFormData({...formData, project: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="metal-button w-full flex items-center justify-center gap-4 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> SENDING REQUEST...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" /> SUBMIT FOR QUOTE
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}