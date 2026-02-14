import { GoogleGenAI } from "@google/genai";

export async function getBrutalAdvice(answers: string[], points: number): Promise<string> {
  const apiKey = process.env.API_KEY;
  
  // Se la chiave non è configurata o è una stringa vuota passata da Vite
  if (!apiKey || apiKey === "" || apiKey === "undefined") {
    return "Configurazione incompleta: manca la API_KEY su Vercel. Aggiungila nelle Environment Variables, salva e rifai il deploy.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Sei un amico/a cinico, onesto ma infondo protettivo. 
    Un utente sta pensando di scrivere al proprio ex a San Valentino 2026.
    L'utente ha ottenuto un punteggio di ${points} su un massimo di 25.
    Risposte date (A=Logico, B=Nostalgico, C=Disperato): ${answers.join(', ')}.

    Scrivi un commento brevissimo (max 2 frasi) in ITALIANO:
    - Sii brutalmente onesto e ironico.
    - Usa un linguaggio moderno (target 18-35 anni).
    - Concludi con un ordine secco di non scrivere.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "Il mio silenzio è la risposta: non farlo, per favore.";
  } catch (error: any) {
    console.error("AI Error:", error);
    if (error?.message?.includes("API key not valid")) {
      return "La tua API Key non è valida. Controlla di averla copiata correttamente su Vercel.";
    }
    return "L'AI ha avuto un mancamento davanti alla tua situazione sentimentale. In breve: non mandare quel messaggio.";
  }
}