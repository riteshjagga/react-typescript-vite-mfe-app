/** @type {import('tailwindcss').Config} */
import path from 'path'

export default {
  preflight: true,
  content: [path.resolve(__dirname, './src/**/*.{ts,tsx,js,jsx}')],
  theme: { extend: {} },
  plugins: [],
}
