import { defineConfig } from 'vite';

// Fix: Removed loadEnv and the manual injection of process.env.API_KEY to resolve the 'process.cwd()' error.
// Adheres to the guideline: "Do not define process.env".
export default defineConfig({
  build: {
    outDir: 'dist',
    target: 'esnext'
  }
});
