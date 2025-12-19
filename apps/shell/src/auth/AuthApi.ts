/* =========================================================
   Auth API Mock – Single File
   ========================================================= */

import { delay } from '@workspace/shared/lib/utils'

export type User = {
  id: string
  email: string
  name: string
}

export type AuthToken = {
  accessToken: string
  expiresAt: number
}

export type ApiResponse<T> = {
  data?: T
  error?: string
}

/* ---------------------------------------------------------
   Mock Database (in-memory)
--------------------------------------------------------- */
const MOCK_USER: User = {
  id: 'u-1',
  email: 'admin@test.com',
  name: 'Admin User',
}

let ACTIVE_TOKEN: AuthToken | null = null

/* =========================================================
   API METHODS
   ========================================================= */

async function signUp(
  email: string,
  name: string,
  password: string
): Promise<ApiResponse<{ user: User; token: AuthToken }>> {
  console.log('Signing up user:', { email, name, password })
  await delay()

  const user: User = {
    id: crypto.randomUUID(),
    email,
    name,
  }

  const token: AuthToken = {
    accessToken: crypto.randomUUID(),
    expiresAt: Date.now() + 60 * 60 * 1000, // 1 hour
  }

  ACTIVE_TOKEN = token

  return {
    data: {
      user,
      token,
    },
  }
}

/* ----------- Sign In ----------- */
async function signIn(
  email: string,
  password: string
): Promise<ApiResponse<{ user: User; token: AuthToken }>> {
  await delay()

  if (email !== MOCK_USER.email || password !== '1234') {
    return { error: 'Invalid email or password' }
  }

  const token: AuthToken = {
    accessToken: crypto.randomUUID(),
    expiresAt: Date.now() + 60 * 60 * 1000, // 1 hour
  }

  ACTIVE_TOKEN = token

  return {
    data: {
      user: MOCK_USER,
      token,
    },
  }
}

/* ----------- Sign Out ----------- */
async function signOut(): Promise<ApiResponse<boolean>> {
  await delay(300)
  ACTIVE_TOKEN = null
  return { data: true }
}

/* ----------- Verify Token ----------- */
async function verifyToken(token: string): Promise<ApiResponse<User>> {
  await delay(500)

  if (!ACTIVE_TOKEN || ACTIVE_TOKEN.accessToken !== token || ACTIVE_TOKEN.expiresAt < Date.now()) {
    return { error: 'Invalid or expired token' }
  }

  return { data: MOCK_USER }
}

/* ----------- Forgot Password ----------- */
async function forgotPassword(email: string): Promise<ApiResponse<boolean>> {
  await delay()

  if (email !== MOCK_USER.email) {
    return { error: 'Email not registered' }
  }

  console.info('Mock: Password reset email sent')

  return { data: true }
}

/* ----------- Reset Password ----------- */
async function resetPassword(token: string, newPassword: string): Promise<ApiResponse<boolean>> {
  await delay()

  if (!token || newPassword.length < 4) {
    return { error: 'Invalid reset token or password' }
  }

  console.info('Mock: Password reset successful')

  return { data: true }
}

/* =========================================================
   SINGLE EXPORT
   ========================================================= */

export const AuthApi = {
  signUp,
  signIn,
  signOut,
  verifyToken,
  forgotPassword,
  resetPassword,
}
