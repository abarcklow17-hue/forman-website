"use client";

import { useState } from 'react';
import { MessageSquare, X, Bot, Send, ArrowRight } from 'lucide-react';
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
    message: "Hey! I'm the Forman & Co assistant. Need help getting some junk removed?",
    options: [
      { label: "I need a quote", nextId: 'quote_info' },
      { label: "Where do you work?", nextId: 'areas' },
      { label: "Talk to Archie", nextId: 'contact' },
    ]
  },
  quote_info: {
    id: 'quote_info',
    message: "Sure! To give you a quote, Archie needs to see what he's hauling. I can walk you through our photo upload form.",
    options: [
      { label: "Start Quote Form", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "How it works", nextId: 'process' },
    ]
  },
  process: {
    id: 'process',
    message: "It's simple: 1. Take a few photos. 2. Send them to us via our form. 3. Archie reviews them and calls/texts you with a price.",
    options: [
      { label: "Got it, let's go", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "Back to menu", nextId: 'start' },
    ]
  },
  areas: {
    id: 'areas',
    message: "We're based in Greeley and serve all of Weld County, plus Fort Collins and Loveland. Ready to clear your space?",
    options: [
      { label: "Yes, I'm in CO", nextId: 'quote_info' },
      { label: "Not sure", nextId: 'contact' },
    ]
  },
  contact: {
    id: 'contact',
    message: "The fastest way is to call or text Archie directly at (970) 400-7357. Want me to dial for you?",
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
            className="w-[350px] bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-4 flex flex-col h-[500px]"
          >
            <div className="bg-black text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-primary" />
                <h4 className="font-black uppercase text-sm tracking-tight">FORMAN ASSISTANT</h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              {history.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex items-start gap-2 max-w-[90%]",
                  msg.type === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                )}>
                  <div className={cn(
                    "p-3 border-2 border-black font-bold text-sm",
                    msg.type === 'user' ? "bg-primary text-white" : "bg-white text-black"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t-2 border-black bg-[#f0f0f0]">
              <div className="flex flex-wrap gap-2">
                {STEPS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(opt)}
                    className="px-3 py-2 bg-white hover:bg-black hover:text-white border-2 border-black text-[10px] font-black uppercase transition-all"
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
          "w-16 h-16 brutal-border flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-white rotate-90" : "bg-primary hover:bg-primary/90"
        )}
      >
        {isOpen ? <X className="w-8 h-8 text-black" /> : <MessageSquare className="w-8 h-8 text-white" />}
      </button>
    </div>
  );
}
