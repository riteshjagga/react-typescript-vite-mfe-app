import { createContext } from 'react'
import type { SignInCredentials, User } from './auth.types'

type AuthContextValue = {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  establishSession: (token: string, user: User) => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
