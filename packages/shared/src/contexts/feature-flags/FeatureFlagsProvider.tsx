import { useEffect, useState } from 'react'
import { FeatureFlagsContext, FeatureFlagsValue } from './FeatureFlagsContext'
import { FeatureFlagsApi } from './featureflags.api'

type FeatureFlagsProviderProps = {
  children: React.ReactNode
}

export function FeatureFlagsProvider({ children }: FeatureFlagsProviderProps) {
  const [flags, setFlags] = useState<FeatureFlagsValue>({})

  useEffect(() => {
    async function getFlags() {
      try {
        const response = await FeatureFlagsApi.getFlags()
        setFlags(response.data!)
      } catch (error) {
        console.error('Failed to fetch feature flags:', error)
      }
    }

    getFlags()
  }, [])

  return <FeatureFlagsContext value={flags}>{children}</FeatureFlagsContext>
}
