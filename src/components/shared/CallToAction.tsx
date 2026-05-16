import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black italic chrome-title uppercase">REQUEST A QUOTE</h2>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Ready to start your project cleanout?</p>
        </div>

        <form className="max-w-xl mx-auto space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="NAME" className="discovery-input w-full px-4 text-xs font-bold" />
            <input type="tel" placeholder="PHONE" className="discovery-input w-full px-4 text-xs font-bold" />
          </div>
          <textarea placeholder="PROJECT DETAILS" className="discovery-input w-full p-4 text-xs font-bold min-h-[100px]"></textarea>
          
          <div className="space-y-2 pt-4">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4">Select Service Type</p>
            <div className="flex flex-wrap gap-4">
              {['Residential', 'Commercial', 'Appliance', 'Other'].map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-4 h-4 border border-white/20 group-hover:border-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  </div>
                  <span className="text-[10px] font-bold uppercase">{s}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="btn-premium w-full mt-8 flex items-center justify-center gap-3">
            SUBMIT REQUEST <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
