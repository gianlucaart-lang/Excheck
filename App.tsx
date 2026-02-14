
import React, { useState, useCallback } from 'react';
import { AppState, VerdictType } from './types';
import { QUESTIONS, VERDICTS } from './constants';
import { getBrutalAdvice } from './services/geminiService';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Header from './components/Header';
import Landing from './components/Landing';

const App: React.FC = () => {
  const [step, setStep] = useState<AppState>('LANDING');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [advice, setAdvice] = useState<string>('');

  const startQuiz = () => setStep('QUIZ');

  const handleQuizComplete = async (totalScore: number, finalAnswers: string[]) => {
    setScore(totalScore);
    setAnswers(finalAnswers);
    setStep('LOADING');

    // Fetch AI advice
    const aiAdvice = await getBrutalAdvice(finalAnswers, totalScore);
    setAdvice(aiAdvice);
    setStep('RESULT');
  };

  const reset = () => {
    setStep('LANDING');
    setScore(0);
    setAnswers([]);
    setAdvice('');
  };

  const getVerdictType = (points: number): VerdictType => {
    if (points >= 12) return 'DO_NOT_TEXT';
    if (points >= 5) return 'RISKY';
    return 'GO_AHEAD';
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-200 selection:bg-rose-500/30">
      <Header onReset={reset} />
      
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl">
          {step === 'LANDING' && <Landing onStart={startQuiz} />}
          
          {step === 'QUIZ' && (
            <Quiz 
              questions={QUESTIONS} 
              onComplete={handleQuizComplete} 
            />
          )}

          {step === 'LOADING' && (
            <div className="text-center space-y-6 animate-pulse">
              <div className="relative inline-block">
                <i className="fa-solid fa-heart-crack text-6xl text-rose-500 animate-bounce"></i>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-500 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-bold italic">Analizzando il tuo livello di disperazione...</h2>
              <p className="text-slate-400">Consultando l'oracolo della dignità perduta.</p>
            </div>
          )}

          {step === 'RESULT' && (
            <Result 
              verdict={VERDICTS[getVerdictType(score)]} 
              advice={advice} 
              onReset={reset} 
            />
          )}
        </div>
      </main>

      <footer className="p-6 text-center text-slate-500 text-sm">
        <p>© 2026 ExCheck - Salvando dignità un clic alla volta.</p>
      </footer>
    </div>
  );
};

export default App;
