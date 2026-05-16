
"use client";

import { useState } from 'react';
import { MessageSquare, X, Bot, ArrowRight, Camera, Send, Truck } from 'lucide-react';
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
    message: "Welcome to Forman & Co. I'm Archie's Assistant. Need a quote for your hauling project today?",
    options: [
      { label: "GET A QUOTE", nextId: 'quote_info' },
      { label: "SERVICE AREAS", nextId: 'areas' },
      { label: "WHAT WE TAKE", nextId: 'services' },
    ]
  },
  quote_info: {
    id: 'quote_info',
    message: "Excellent. Archie provides the fastest quotes via photos. Would you like to use our site form or contact Archie directly?",
    options: [
      { label: "USE WEBSITE FORM", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "CALL ARCHIE NOW", nextId: null, action: () => window.location.href = 'tel:9704007357' },
      { label: "BACK TO MAIN", nextId: 'start' },
    ]
  },
  areas: {
    id: 'areas',
    message: "We're based in Greeley and serve Windsor, Fort Collins, Evans, Eaton, and all of Weld County. Ready for a quote?",
    options: [
      { label: "GET QUOTE NOW", nextId: 'quote_info' },
      { label: "BACK TO MAIN", nextId: 'start' },
    ]
  },
  services: {
    id: 'services',
    message: "We take Furniture, Appliances, Debris, Yard Waste, and more. If it's not hazardous, we haul it. Start your quote?",
    options: [
      { label: "START QUOTE", nextId: 'quote_info' },
      { label: "BACK TO MAIN", nextId: 'start' },
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
    // Add user message to history
    setHistory(prev => [...prev, { type: 'user', text: option.label }]);
    
    // Execute action if it exists
    if (option.action) {
      option.action();
      return;
    }

    // Navigate to next step if it exists
    if (option.nextId) {
      const nextStep = STEPS[option.nextId];
      setTimeout(() => {
        setHistory(prev => [...prev, { type: 'bot', text: nextStep.message }]);
        setCurrentStep(option.nextId!);
      }, 600);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[350px] bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden mb-6 flex flex-col h-[500px] relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            
            <div className="p-4 bg-zinc-900/50 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-[10px] tracking-widest text-white italic leading-none">Quote Assistant</h4>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-950/20 custom-scrollbar">
              {history.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex flex-col gap-2 max-w-[90%]",
                  msg.type === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                )}>
                   <div className={cn(
                    "p-4 text-xs leading-relaxed",
                    msg.type === 'user' ? "bg-primary text-white font-bold italic uppercase" : "bg-zinc-900 text-white border border-white/5"
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
                    className="px-4 py-2 bg-zinc-800 hover:bg-primary border border-white/5 text-[9px] font-bold uppercase transition-all text-white italic tracking-widest"
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
          "w-16 h-16 flex items-center justify-center transition-all duration-300 shadow-2xl active:scale-95 group relative",
          isOpen ? "bg-zinc-900 border border-white/10" : "bg-primary"
        )}
      >
        <div className="absolute inset-0 bg-primary/20 animate-ping rounded-none group-hover:bg-primary/40 -z-10" />
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageSquare className="w-8 h-8 text-white" />
        )}
      </button>
    </div>
  );
}
