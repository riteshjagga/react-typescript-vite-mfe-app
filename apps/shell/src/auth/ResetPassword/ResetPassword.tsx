import React, { useState } from 'react'
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
import { useNavigate } from 'react-router-dom'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    console.log('Reset password:', { password })
    setSuccess(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      action()
    }
  }

  if (success) {
    return (
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Password reset successful</CardTitle>
          <CardDescription>Your password has been successfully reset</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <AlertDescription>You can now sign in with your new password.</AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue to sign in</Button>
        </CardFooter>
      </Card>
    )
  }

  const handleSignInClick = () => {
    return navigate('/sign-in')
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
        <CardDescription>Enter your new password below</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reset-password">New Password</Label>
            <Input
              id="reset-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => handleKeyDown(e, handleSubmit)}
              required
              autoComplete="new-password"
            />
            <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reset-confirm-password">Confirm New Password</Label>
            <Input
              id="reset-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              onKeyDown={e => handleKeyDown(e, handleSubmit)}
              required
              autoComplete="new-password"
            />
          </div>
          <Button onClick={handleSubmit} className="w-full">
            Reset password
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-muted-foreground w-full">
          <button className="text-primary hover:underline font-medium" onClick={handleSignInClick}>
            Back to sign in
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
