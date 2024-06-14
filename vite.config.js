import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the current working directory
const currentWorkingDirectory = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": `${currentWorkingDirectory}/src`, // Set the base directory for your project
      "@common": `${currentWorkingDirectory}/src/components/common`,
      "@features": `${currentWorkingDirectory}/src/components/features`,
      "@data": `${currentWorkingDirectory}/src/data`,
      "@styles": `${currentWorkingDirectory}/src/styles`,
      "@hooks": `${currentWorkingDirectory}/src/hooks`,
      "@provider": `${currentWorkingDirectory}/src/provider`,
      "@context": `${currentWorkingDirectory}/src/context`,
    },
  },
});
