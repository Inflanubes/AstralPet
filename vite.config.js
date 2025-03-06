import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // 🔹 Asegura que este sea el nombre exacto de tu repositorio en GitHub
});
