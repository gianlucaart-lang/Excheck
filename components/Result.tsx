
import React from 'react';
import { Verdict } from '../types';

interface ResultProps {
  verdict: Verdict;
  advice: string;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ verdict, advice, onReset }) => {
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className={`p-8 rounded-3xl ${verdict.color} shadow-2xl shadow-rose-900/20 text-white relative overflow-hidden`}>
        <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
          <i className={`fa-solid ${verdict.icon} text-[150px]`}></i>
        </div>
        
        <div className="relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-2">
            <i className={`fa-solid ${verdict.icon} text-4xl`}></i>
          </div>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase">
            {verdict.title}
          </h2>
          <p className="text-xl font-medium leading-relaxed opacity-90 max-w-lg mx-auto">
            {verdict.description}
          </p>
        </div>
      </div>

      <div className="custom-glass p-6 rounded-3xl space-y-4 border-l-4 border-l-rose-500">
        <div className="flex items-center gap-2 text-rose-500 font-bold uppercase tracking-widest text-xs">
          <i className="fa-solid fa-comment-dots"></i>
          <span>Il parere della tua coscienza AI:</span>
        </div>
        <p className="text-lg italic leading-relaxed text-slate-300">
          "{advice}"
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <button 
          onClick={onReset}
          className="flex-1 px-8 py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-rotate-left"></i>
          Rifacciamolo (ero ubriaco/a)
        </button>
        <button 
          onClick={() => window.open('https://www.google.com/search?q=video+di+gattini+carini', '_blank')}
          className="flex-1 px-8 py-5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-cat"></i>
          Ho bisogno di distrazione
        </button>
      </div>

      <div className="text-center p-4 border border-slate-800 rounded-2xl text-xs text-slate-500">
        <p>Hai superato la fase critica. Congratulazioni per non aver mandato quel messaggio. La tua dignità ti ringrazierà domani.</p>
      </div>
    </div>
  );
};

export default Result;
