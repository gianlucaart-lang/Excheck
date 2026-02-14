import { GoogleGenAI } from "@google/genai";

export async function getBrutalAdvice(answers: string[], points: number): Promise<string> {
  // Fix: Use process.env.API_KEY directly when initializing the client as per guidelines.
  // Assume the variable is pre-configured and accessible in the execution context.
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    const prompt = `Sei un amico cinico e onesto. Un utente con punteggio di disperazione ${points}/25 vuole scrivere all'ex a San Valentino. Risposte date: ${answers.join(',')}. Dai un consiglio di 2 righe massimo, brutale e in italiano, ordinandogli di non farlo assolutamente.`;

    // Fix: Model name 'gemini-3-flash-preview' is used for basic text tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 1,
      }
    });
    
    // Fix: Directly accessing the .text property (not a method) from the GenerateContentResponse.
    return response.text || "Il mio consiglio è il silenzio. Non scrivergli.";
  } catch (error) {
    console.error("Errore critico Gemini:", error);
    return "L'IA è rimasta senza parole per la tua scarsa dignità. In breve: posa quel telefono e vai a dormire.";
  }
}
