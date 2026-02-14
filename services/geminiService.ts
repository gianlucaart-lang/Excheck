
import { GoogleGenAI } from "@google/genai";

export async function getBrutalAdvice(answers: string[], points: number): Promise<string> {
  try {
    // Fix: Initialize GoogleGenAI client directly with process.env.API_KEY as per @google/genai guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    const prompt = `Sei un amico cinico e onesto. Un utente con punteggio di disperazione ${points}/25 (alto = molto disperato) vuole scrivere all'ex a San Valentino. Risposte date: ${answers.join(',')}. Dai un consiglio di 2 righe massimo, brutale e in italiano, ordinandogli di non farlo assolutamente.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 1,
      }
    });
    
    // Fix: Directly access the .text property of the response object (not a method).
    return response.text || "Il mio consiglio è il silenzio. Non scrivergli.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Graceful fallback message that avoids exposing API key configuration details to the user.
    return "L'IA è andata in tilt per quanto è pessima questa tua idea. In breve: non mandare quel messaggio.";
  }
}
