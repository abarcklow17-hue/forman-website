"use client";

import { useState } from 'react';
import { MessageSquare, X, Bot, User, ArrowRight } from 'lucide-react';
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
    message: "Hey! I'm Archie's assistant. Need a fast quote or just wondering how we work?",
    options: [
      { label: "I need a quote now", nextId: 'quote_walkthrough' },
      { label: "What are your rates?", nextId: 'rates' },
      { label: "Where do you work?", nextId: 'areas' },
    ]
  },
  quote_walkthrough: {
    id: 'quote_walkthrough',
    message: "Archie gives the best quotes when he can see the job. The best way is to use our photo upload form. Want me to take you there?",
    options: [
      { label: "Yes, go to form", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "Tell me the steps first", nextId: 'steps' },
    ]
  },
  steps: {
    id: 'steps',
    message: "Simple: 1. You snap a few photos of the junk. 2. You fill out our 30-second form. 3. Archie calls or texts you personally with a price.",
    options: [
      { label: "Sounds easy, let's go", nextId: null, action: () => window.location.href = '/estimate' },
      { label: "Back to main", nextId: 'start' },
    ]
  },
  rates: {
    id: 'rates',
    message: "Our prices start at just $95 for single items. A full 14ft truck is $650. We're usually 40% cheaper than the big guys. Ready to save?",
    options: [
      { label: "Yes, get a quote", nextId: 'quote_walkthrough' },
      { label: "Do you match prices?", nextId: 'match' },
    ]
  },
  match: {
    id: 'match',
    message: "Absolutely. If you have a written quote from another licensed company, Archie will challenge it. We're rarely beaten on price.",
    options: [
      { label: "Good to know. Get Quote", nextId: 'quote_walkthrough' },
    ]
  },
  areas: {
    id: 'areas',
    message: "We're Greeley locals, but we hit Windsor, Fort Collins, Loveland, Evans, and all of Weld County. You in the area?",
    options: [
      { label: "Yes, I'm local", nextId: 'quote_walkthrough' },
      { label: "No, somewhere else", nextId: 'start' },
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
            className="w-[380px] bg-white border-4 border-black rounded-none shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-4 flex flex-col h-[550px]"
          >
            <div className="bg-black text-white p-5 flex items-center justify-between border-b-4 border-black">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary brutal-border flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-black uppercase text-sm tracking-widest italic">Archie's Assistant</h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50">
              {history.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex flex-col gap-1 max-w-[85%]",
                  msg.type === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                )}>
                   <div className={cn(
                    "p-4 border-2 border-black font-bold text-sm leading-snug",
                    msg.type === 'user' ? "bg-primary text-white" : "bg-white text-black"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t-4 border-black bg-white">
              <div className="flex flex-wrap gap-2">
                {STEPS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(opt)}
                    className="px-4 py-3 bg-zinc-100 hover:bg-black hover:text-white border-2 border-black text-[11px] font-black uppercase transition-all italic tracking-tighter"
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
          "w-20 h-20 brutal-border flex items-center justify-center transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]",
          isOpen ? "bg-white" : "bg-primary"
        )}
      >
        {isOpen ? <X className="w-10 h-10 text-black" /> : <MessageSquare className="w-10 h-10 text-white" />}
      </button>
    </div>
  );
}
