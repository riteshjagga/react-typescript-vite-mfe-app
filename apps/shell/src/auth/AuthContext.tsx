import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { AuthApi } from './AuthApi'

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  establishSession: (token: string, user: User) => void
}

interface User {
  id: string
  email: string
  name: string
}

interface SignInCredentials {
  email: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for existing session on mount
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('authToken')
      console.log('Getting access token from localStorage:', token)
      if (token) {
        // Verify token with your backend
        const response = await AuthApi.verifyToken(token)

        const userData = response.data
        if (userData) {
          setUser(userData)
          setIsAuthenticated(true)
        } else {
          setUser(null)
          setIsAuthenticated(false)
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (credentials: SignInCredentials) => {
    try {
      /*const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })*/

      const response = await AuthApi.signIn(credentials.email, credentials.password)

      if (response.data) {
        const { token, user } = response.data
        establishSession(token.accessToken, user)
      } else {
        throw new Error(response.error)
      }
    } catch (error) {
      console.error('Sign in error:', error)
      setUser(null)
      setIsAuthenticated(false)
      throw error
    }
  }

  const establishSession = (token: string, user: User) => {
    localStorage.setItem('authToken', token)
    setUser(user)
    setIsAuthenticated(true)
  }

  const clearSession = () => {
    localStorage.removeItem('authToken')
    setUser(null)
    setIsAuthenticated(false)
  }

  const signOut = async () => {
    try {
      /*const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })*/

      const response = await AuthApi.signOut()

      if (response.error) {
        throw new Error(response.error)
      }
    } catch (error) {
      console.error('Sign out error:', error)
      console.error('Signing out anyway...')
    } finally {
      clearSession()
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, user, signIn, signOut, establishSession }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
