import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',manifest:{name:'ZXH OFFICIAL COMPANY',short_name:'ZXH OFFICIAL',description:'Web, Apps & Digital Solutions',theme_color:'#0b0b0b',background_color:'#0b0b0b',display:'standalone',icons:[]}})]});
