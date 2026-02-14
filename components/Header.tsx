
import React from 'react';

interface HeaderProps {
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="p-6 flex justify-between items-center border-b border-slate-800/50 custom-glass sticky top-0 z-50">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={onReset}
      >
        <div className="bg-rose-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
          <i className="fa-solid fa-shield-heart text-white"></i>
        </div>
        <h1 className="text-2xl font-bold tracking-tighter">
          Ex<span className="text-rose-500">Check</span>
        </h1>
      </div>
      
      <div className="hidden md:flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-400">
        <span>San Valentino 2026</span>
        <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
        <span>Protocollo Anti-Cringe</span>
      </div>
    </header>
  );
};

export default Header;
