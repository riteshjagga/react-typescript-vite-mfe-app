import { createContext } from 'react'
import { type Theme } from './theme.types'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialValue: ThemeContextValue = {
  theme: 'system',
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeContextValue>(initialValue)
