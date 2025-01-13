import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// The problem is that __dirname is not defined in ES modules. To fix this, you can use import.meta.url to get the directory name.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
