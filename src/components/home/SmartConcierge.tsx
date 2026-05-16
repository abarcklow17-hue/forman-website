"use client";

import { useState, useEffect } from 'react';
import { MessageSquare, X, ArrowRight, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    message: "Hey! I'm the Forman & Co assistant. How can Archie help you today?",
    options: [
      { label: "Need a junk estimate", nextId: 'estimate' },
      { label: "Check service areas", nextId: 'areas' },
      { label: "Talk to Archie", nextId: 'contact' },
    ]
  },
  estimate: {
    id: 'estimate',
    message: "Awesome. Our AI tool can give you a quick range if you have photos, or I can tell you our base pricing.",
    options: [
      { label: "Try AI Estimator", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "Standard Pricing", nextId: 'pricing' },
    ]
  },
  areas: {
    id: 'areas',
    message: "We're based in Greeley and serve all of Weld County, including Fort Collins, Loveland, Windsor, and Milliken. Are you in our area?",
    options: [
      { label: "Yes, I'm in Weld County", nextId: 'contact' },
      { label: "Not sure", nextId: 'contact' },
    ]
  },
  pricing: {
    id: 'pricing',
    message: "Our pricing starts at $99 for small single-item pickups. A full trailer load typically ranges from $450-$650 depending on weight. Ready to book?",
    options: [
      { label: "Book Now", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "Ask something else", nextId: 'start' },
    ]
  },
  contact: {
    id: 'contact',
    message: "The fastest way to get an answer is to call or text Archie directly at (970) 400-7357. Should I help you call now?",
    options: [
      { label: "Call Archie", nextId: null, action: () => window.location.href = 'tel:9704007357' },
      { label: "Back to menu", nextId: 'start' },
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
            className="w-[350px] bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col h-[500px]"
          >
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Forman Concierge</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {history.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex items-start gap-2 max-w-[85%]",
                  msg.type === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                )}>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.type === 'user' ? "bg-primary text-white rounded-tr-none" : "bg-white/5 text-muted-foreground border border-white/5 rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="flex flex-wrap gap-2">
                {STEPS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(opt)}
                    className="px-3 py-2 bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 rounded-lg text-xs font-bold transition-all"
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
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-card rotate-90 scale-90" : "bg-primary hover:scale-105 active:scale-95"
        )}
      >
        {isOpen ? <X className="w-8 h-8 text-white" /> : <MessageSquare className="w-8 h-8 text-white" />}
      </button>
    </div>
  );
}
