
import { GoogleGenAI } from "@google/genai";

export async function getBrutalAdvice(answers: string[], points: number): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `
    Sei un amico/a cinico, onesto ma infondo protettivo. 
    Un utente sta pensando di scrivere al proprio ex a San Valentino 2026.
    L'utente ha ottenuto un punteggio di ${points} su un massimo di 25 (più alto è il punteggio, peggiore è l'idea).
    Ecco un riassunto delle risposte (A=Logico/Freddo, B=Nostalgico/Debole, C=Disperato/Ubriaco):
    Risposte date: ${answers.join(', ')}.

    Scrivi un breve commento (massimo 3 frasi) in ITALIANO che sia:
    1. Ironico e "brutalmente onesto".
    2. Utilizzi un linguaggio moderno e relatable per un target 18-35 anni.
    3. Dia un consiglio finale secco.
    
    Non essere troppo cattivo, ma non indorare la pillola. Fagli capire che siamo nel 2026 e certe abitudini dovrebbero essere morte nel 2025.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.9,
        topP: 0.95,
      }
    });
    return response.text || "Il mio cervello è andato in corto circuito cercando di capire la tua situazione. In breve: non farlo.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Guarda, anche l'intelligenza artificiale pensa che sia una pessima idea. Risparmiati questa figura.";
  }
}
