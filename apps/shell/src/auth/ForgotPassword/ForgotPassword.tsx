import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/shared/components/ui/card'
import { Button } from '@workspace/shared/components/ui/button'
import { Input } from '@workspace/shared/components/ui/input'
import { Label } from '@workspace/shared/components/ui/label'
import { Alert, AlertDescription } from '@workspace/shared/components/ui/alert'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log('Forgot password:', { email })
    setSubmitted(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      action()
    }
  }

  const handleSignInClick = () => {
    return navigate('/sign-in')
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
          <CardDescription>We've sent a password reset link to {email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              If you don't see the email, check your spam folder or try again.
            </AlertDescription>
          </Alert>
          <Button variant="outline" className="w-full" onClick={() => setSubmitted(false)}>
            Try another email
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground w-full">
            <button
              className="text-primary hover:underline font-medium"
              onClick={handleSignInClick}
            >
              Back to sign in
            </button>
          </p>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Forgot password?</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you a link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="forgot-email">Email</Label>
            <Input
              id="forgot-email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => handleKeyDown(e, handleSubmit)}
              required
              autoComplete="email"
            />
          </div>
          <Button onClick={handleSubmit} className="w-full">
            Send reset link
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-muted-foreground w-full">
          Remember your password?{' '}
          <button className="text-primary hover:underline font-medium" onClick={handleSignInClick}>
            Sign in
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
