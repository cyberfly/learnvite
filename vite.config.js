import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  base: "/learnvite/",
  plugins: [tailwindcss()],
}));
