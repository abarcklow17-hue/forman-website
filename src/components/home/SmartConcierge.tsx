"use client";

import { useState } from 'react';
import { MessageSquare, X, Bot, ArrowRight, Camera, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Step = {
  id: string;
  message: string;
  options: { label: string; nextId: string | null; action?: () => void }[];
};

const STEPS: Record<string, Step> = {
  start: {
    id: 'start',
    message: "Hey! I'm Archie's Assistant. Need a quick quote for a project in Greeley or nearby?",
    options: [
      { label: "Yes, I need a quote", nextId: 'quote_info' },
      { label: "What areas do you serve?", nextId: 'areas' },
      { label: "What can you haul?", nextId: 'services' },
    ]
  },
  quote_info: {
    id: 'quote_info',
    message: "Archie gives the best quotes when he can see the job. Would you like to use our guided photo form or just send a text?",
    options: [
      { label: "Use the site form", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "Text Archie now", nextId: null, action: () => window.location.href = 'tel:9704007357' },
      { label: "Tell me more first", nextId: 'how_it_works' },
    ]
  },
  areas: {
    id: 'areas',
    message: "We're local Greeley haulers, but we hit Windsor, Evans, Johnstown, Fort Collins, and all of Weld County. Ready to book?",
    options: [
      { label: "Yes, get quote", nextId: 'quote_info' },
      { label: "Back to main", nextId: 'start' },
    ]
  },
  services: {
    id: 'services',
    message: "We haul almost everything: Furniture, Appliances, Yard Waste, Hot Tubs, Construction Debris... you name it, we haul it. Need something gone?",
    options: [
      { label: "Yes, get quote", nextId: 'quote_info' },
      { label: "Back to main", nextId: 'start' },
    ]
  },
  how_it_works: {
    id: 'how_it_works',
    message: "Simple: 1. Send us info & photos. 2. Archie calls with a firm price. 3. We haul it and you relax. Ready?",
    options: [
      { label: "Let's go!", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "Back to main", nextId: 'start' },
    ]
  }
};

export function SmartConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [history, setHistory] = useState<{ type: 'bot' | 'user'; text: string }[]>([
    { type: 'bot', text: STEPS.start.message }
  ]);

  const handleOption = (option: typeof STEPS['start']['options'][0]) => {
    setHistory(prev => [...prev, { type: 'user', text: option.label }]);
    
    if (option.action) {
      option.action();
      return;
    }

    if (option.nextId) {
      const nextStep = STEPS[option.nextId];
      setTimeout(() => {
        setHistory(prev => [...prev, { type: 'bot', text: nextStep.message }]);
        setCurrentStep(option.nextId!);
      }, 600);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[380px] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col h-[550px]"
          >
            <div className="bg-gradient-to-r from-primary to-[#8b0000] p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-white italic">Quote Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-white/70 uppercase">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-900/50">
              {history.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex flex-col gap-1 max-w-[85%]",
                  msg.type === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                )}>
                   <div className={cn(
                    "p-4 rounded-xl text-sm leading-relaxed shadow-lg",
                    msg.type === 'user' ? "bg-primary text-white" : "bg-zinc-800 text-white border border-white/5"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-zinc-950 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {STEPS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(opt)}
                    className="px-4 py-2 bg-zinc-800 hover:bg-primary border border-white/5 text-[10px] font-black uppercase rounded-full transition-all text-white italic"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl active:scale-95 group",
          isOpen ? "bg-zinc-900 border border-white/10" : "bg-primary"
        )}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="relative">
             <MessageSquare className="w-8 h-8 text-white" />
             <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-primary" />
          </div>
        )}
      </button>
    </div>
  );
}