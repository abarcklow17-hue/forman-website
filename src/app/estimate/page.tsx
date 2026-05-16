"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Camera, Upload, Trash2, Loader2, Sparkles, CheckCircle, Info } from 'lucide-react';
import { estimateJunkVolumeFromPhotos, type EstimateJunkVolumeFromPhotosOutput } from '@/ai/flows/estimate-junk-volume-from-photos';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export default function EstimatePage() {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimate, setEstimate] = useState<EstimateJunkVolumeFromPhotosOutput | null>(null);

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

  const getEstimate = async () => {
    if (photos.length === 0) {
      toast({
        title: "Missing Photos",
        description: "Please upload at least one photo for the AI to analyze.",
        variant: "destructive"
      });
      return;
    }

    setIsEstimating(true);
    try {
      const result = await estimateJunkVolumeFromPhotos({ photos, description });
      setEstimate(result);
      toast({
        title: "Estimate Ready!",
        description: "Archie's AI has analyzed your junk pile.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Estimation Failed",
        description: "There was an error processing your photos. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsEstimating(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Instant AI <span className="text-primary italic">Estimator</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Upload a few photos of your junk pile, and our professional AI agent will give you an immediate volume and price range estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">1. Upload Photos</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {photos.map((photo, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group">
                      <Image src={photo} alt="Upload" fill className="object-cover" />
                      <button 
                        onClick={() => removePhoto(idx)}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group">
                    <input type="file" className="hidden" multiple accept="image/*" onChange={handlePhotoUpload} />
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <Camera className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground group-hover:text-primary">Add Photo</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">2. Add Description (Optional)</Label>
                <Textarea 
                  placeholder="Tell us what we're looking at (e.g., 'Moving out, old furniture in garage')"
                  className="min-h-[120px] bg-card border-white/10 focus:ring-primary"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <Button 
                onClick={getEstimate} 
                disabled={isEstimating || photos.length === 0}
                className="w-full h-16 text-lg font-bold glow-subtle"
              >
                {isEstimating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Analyzing Pile...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" /> Generate Instant Estimate
                  </>
                )}
              </Button>

              <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/5 rounded-xl text-xs text-muted-foreground leading-relaxed">
                <Info className="w-4 h-4 text-primary shrink-0" />
                <span>
                  This AI tool provides an approximate estimate based on visual data. Final pricing is determined on-site by Archie once the crew sees the full scope of work.
                </span>
              </div>
            </div>

            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                {estimate ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Card className="bg-[#121212] border-primary/20 shadow-2xl overflow-hidden">
                      <div className="h-2 bg-primary w-full" />
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          Estimate Generated
                        </CardTitle>
                        <CardDescription>Based on your photos and description</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Volume Est.</p>
                            <p className="text-3xl font-bold">{estimate.estimatedVolumeCubicYards} <span className="text-xs text-muted-foreground">CU/YD</span></p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Price Est.</p>
                            <p className="text-3xl font-bold text-primary">{estimate.estimatedPriceRange}</p>
                          </div>
                        </div>

                        {estimate.notes && (
                          <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Archie's AI Notes</p>
                            <p className="text-sm leading-relaxed text-muted-foreground italic">
                              "{estimate.notes}"
                            </p>
                          </div>
                        )}

                        <div className="space-y-4 pt-4 border-t border-white/5">
                          <Button className="w-full h-14 font-bold" onClick={() => window.location.href = 'tel:9704007357'}>
                            Book Pickup with Archie
                          </Button>
                          <Button variant="outline" className="w-full h-14 font-bold border-white/10" onClick={() => {
                            setEstimate(null);
                            setPhotos([]);
                            setDescription('');
                          }}>
                            Start Over
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <div className="h-[500px] border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-12 space-y-4">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="w-10 h-10 text-white/20" />
                    </div>
                    <h3 className="text-xl font-bold text-white/40 tracking-tight">Awaiting Analysis</h3>
                    <p className="text-muted-foreground text-sm max-w-[250px]">
                      Upload your photos on the left to see your volume and price estimate here.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
