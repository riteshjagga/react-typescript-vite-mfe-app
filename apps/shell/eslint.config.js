import baseConfig from '../../eslint.config.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
]
