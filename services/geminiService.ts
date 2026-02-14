
import { GoogleGenAI } from "@google/genai";

export async function getBrutalAdvice(answers: string[], points: number): Promise<string> {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API_KEY non configurata nelle variabili d'ambiente.");
    return "Errore di configurazione: manca la chiave API. Controlla le impostazioni di Vercel.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Sei un amico/a cinico, onesto ma infondo protettivo. 
    Un utente sta pensando di scrivere al proprio ex a San Valentino 2026.
    L'utente ha ottenuto un punteggio di ${points} su un massimo di 25 (più alto è il punteggio, peggiore è l'idea).
    Ecco un riassunto delle risposte (A=Logico/Freddo, B=Nostalgico/Debole, C=Disperato/Ubriaco):
    Risposte date: ${answers.join(', ')}.

    Scrivi un breve commento (massimo 3 frasi) in ITALIANO che sia:
    1. Ironico e "brutalmente onesto".
    2. Utilizzi un linguaggio moderno e relatable (target 18-35 anni).
    3. Dia un consiglio finale secco.
    
    Non essere offensivo, ma fagli capire che scrivere all'ex il 14 febbraio è una mossa da manuale della disperazione.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    
    return response.text || "Il mio processore si rifiuta di commentare. In breve: non farlo.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Persino l'intelligenza artificiale pensa sia una pessima idea. Salva la tua dignità.";
  }
}
