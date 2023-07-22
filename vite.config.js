import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import includePaths from "rollup-plugin-includepaths";

// includePaths({ paths: ["./src"] })
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});
