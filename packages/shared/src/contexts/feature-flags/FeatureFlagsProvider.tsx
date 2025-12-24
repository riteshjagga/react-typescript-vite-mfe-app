import { useEffect, useState } from 'react'
import { FeatureFlagsContext, FeatureFlagsValue } from './FeatureFlagsContext'

type FeatureFlagsProviderProps = {
  children: React.ReactNode
}

export function FeatureFlagsProvider({ children }: FeatureFlagsProviderProps) {
  const [flags, setFlags] = useState<FeatureFlagsValue>({})

  useEffect(() => {
    fetch('/api/feature-flags')
      .then(res => res.json())
      .then(setFlags)
  }, [])

  return <FeatureFlagsContext value={flags}>{children}</FeatureFlagsContext>
}
