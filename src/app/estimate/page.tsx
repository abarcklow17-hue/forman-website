"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Trash2, Loader2, Send, CheckCircle, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export default function QuotePage() {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
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
    if (photos.length === 0) {
      toast({
        title: "Photos Required",
        description: "Please add at least one photo of the items you need removed.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call/Email submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Quote Requested!",
        description: "Archie will review your photos and get back to you shortly.",
      });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-48 pb-24 text-center">
          <div className="max-w-2xl mx-auto brutal-card space-y-8 py-20">
            <div className="w-20 h-20 bg-primary mx-auto flex items-center justify-center brutal-border">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black">QUOTE SENT!</h1>
            <p className="text-xl font-bold">
              Thanks for reaching out. Archie will personally review your request and contact you at <span className="text-primary">{phone || email}</span> with an estimate.
            </p>
            <Button asChild size="lg" className="brutal-border bg-black text-white h-16 px-10 text-xl font-black">
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] relative">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-10" />
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">GET A <span className="text-primary italic">FREE QUOTE</span></h1>
            <p className="text-xl font-bold max-w-2xl">
              Fill out the form below and upload photos of your junk. Archie will get back to you with a professional estimate today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="brutal-card space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-black uppercase">Your Name</Label>
                  <Input 
                    required
                    placeholder="John Doe" 
                    className="h-14 brutal-border bg-white text-lg font-bold"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-black uppercase">Phone Number</Label>
                  <Input 
                    required
                    type="tel"
                    placeholder="(970) 555-0123" 
                    className="h-14 brutal-border bg-white text-lg font-bold"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-black uppercase">Email Address (Optional)</Label>
                <Input 
                  type="email"
                  placeholder="john@example.com" 
                  className="h-14 brutal-border bg-white text-lg font-bold"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-black uppercase">Upload Photos of the Items</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {photos.map((photo, idx) => (
                    <div key={idx} className="relative aspect-square brutal-border bg-white group">
                      <Image src={photo} alt="Upload" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute -top-2 -right-2 p-1 bg-black text-white brutal-border"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square border-4 border-dashed border-black flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/5 transition-all">
                    <input type="file" className="hidden" multiple accept="image/*" onChange={handlePhotoUpload} />
                    <Camera className="w-8 h-8" />
                    <span className="text-[10px] font-black uppercase">Add Photo</span>
                  </label>
                </div>
                <div className="flex items-start gap-2 text-xs font-bold text-muted-foreground italic">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>The clearer the photos, the more accurate Archie can be with your quote.</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-black uppercase">Job Details</Label>
                <Textarea 
                  placeholder="Tell us what needs to go and where it's located (e.g., 'Old couch in the basement, easy access through garage')"
                  className="min-h-[150px] brutal-border bg-white text-lg font-bold"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-20 text-2xl font-black uppercase brutal-border bg-primary text-white hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 mr-2" /> Submit Quote Request
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
