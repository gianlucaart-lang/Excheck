import { GoogleGenAI } from "@google/genai";

export async function getBrutalAdvice(answers: string[], points: number): Promise<string> {
  // In un'app Vite, process.env.API_KEY viene sostituito durante il build
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    return "ATTENZIONE: La chiave API non è stata trovata durante il build. Assicurati di aver aggiunto API_KEY nelle Environment Variables di Vercel e di aver cliccato su 'Redeploy'.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Sei un amico cinico e onesto. Un utente con punteggio di disperazione ${points}/25 (alto = male) vuole scrivere all'ex a San Valentino. Risposte: ${answers.join(',')}. Dai un consiglio di 2 righe massimo, brutale e in italiano, ordinandogli di non farlo.`,
      config: {
        temperature: 0.9,
      }
    });
    
    return response.text || "Il mio consiglio è il silenzio. Non scrivergli.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Anche l'IA è rimasta senza parole per questa idea pessima. Risparmiati il dolore: non inviare nulla.";
  }
}