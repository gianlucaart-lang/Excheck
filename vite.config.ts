
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Fix: Cast process to any to resolve the TypeScript error 'Property cwd does not exist on type Process' at build time.
  const root = (process as any).cwd ? (process as any).cwd() : '.';
  const env = loadEnv(mode, root, '');
  
  return {
    define: {
      // Priorità alla variabile caricata da env, poi a quella di sistema per l'iniezione automatica nel client.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || (process.env as any).API_KEY || "")
    },
    build: {
      outDir: 'dist',
      target: 'esnext'
    }
  };
});
