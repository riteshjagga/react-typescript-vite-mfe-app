import { AuthProvider } from '@workspace/shared/contexts/auth'
import { FeatureFlagsProvider } from '@workspace/shared/contexts/feature-flags'
import { ThemeProvider } from '@workspace/shared/contexts/theme'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <FeatureFlagsProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FeatureFlagsProvider>
    </AuthProvider>
  )
}
