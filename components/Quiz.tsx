
import React, { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (score: number, answers: string[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (points: number, value: string) => {
    const newScore = score + points;
    const newAnswers = [...answers, value];
    
    if (currentIndex < questions.length - 1) {
      setScore(newScore);
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newScore, newAnswers);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <div className="flex justify-between items-end text-xs font-bold uppercase tracking-widest text-rose-500">
          <span>Domanda {currentIndex + 1} di {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-rose-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          {questions[currentIndex].text}
        </h2>

        <div className="grid gap-3">
          {questions[currentIndex].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(option.points, option.value)}
              className="flex items-center text-left p-5 rounded-2xl custom-glass hover:bg-white/5 border border-white/5 hover:border-rose-500/50 transition-all group active:scale-[0.98]"
            >
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sm text-slate-400 group-hover:bg-rose-600 group-hover:text-white transition-colors mr-4 shrink-0">
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="text-lg font-medium leading-snug">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 flex items-center justify-center gap-2 text-slate-500 text-sm italic">
        <i className="fa-solid fa-fingerprint"></i>
        <span>Sii onesto/a con te stesso/a.</span>
      </div>
    </div>
  );
};

export default Quiz;
