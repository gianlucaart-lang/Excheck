
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="text-center space-y-10 py-10">
      <div className="space-y-4">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Stai per scrivere <br />
          <span className="gradient-text italic">al tuo ex?</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed">
          San Valentino è una trappola. Prima di distruggere mesi di terapia con un "Ehi, come va?", 
          fai questo test di realtà brutalmente onesto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-xl mx-auto">
        <div className="custom-glass p-4 rounded-xl border-rose-500/20">
          <i className="fa-solid fa-bolt text-rose-500 mb-2"></i>
          <h3 className="font-bold text-sm mb-1">Rapido</h3>
          <p className="text-xs text-slate-500">5 domande affilate come lame.</p>
        </div>
        <div className="custom-glass p-4 rounded-xl border-rose-500/20">
          <i className="fa-solid fa-brain text-rose-500 mb-2"></i>
          <h3 className="font-bold text-sm mb-1">Psicologico</h3>
          <p className="text-xs text-slate-500">Smascheriamo le tue bugie.</p>
        </div>
        <div className="custom-glass p-4 rounded-xl border-rose-500/20">
          <i className="fa-solid fa-ghost text-rose-500 mb-2"></i>
          <h3 className="font-bold text-sm mb-1">Salvavita</h3>
          <p className="text-xs text-slate-500">Niente più ghosting dolorosi.</p>
        </div>
      </div>

      <button 
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-rose-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-700 active:scale-95"
      >
        Inizia il Reality Check
        <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
      </button>

      <p className="text-xs text-slate-600 italic">
        *Disclaimer: Non ci assumiamo responsabilità per blocchi improvvisi su WhatsApp.
      </p>
    </div>
  );
};

export default Landing;
