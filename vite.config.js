import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Presentation demo — not configured for deployment.
export default defineConfig({
  plugins: [react()],
  server: { port: 5175, open: false },
  preview: { port: 4175 },
});
