import { useContext } from 'react'
import { FeatureFlagsContext, FeatureFlagsValue } from './FeatureFlagsContext'

export const useFeatureFlags = () => {
  const flags = useContext(FeatureFlagsContext)

  if (!flags) throw new Error('useFeatureFlags must be used within FeatureFlagsProvider')

  return flags
}

export const useFeatureFlag = <K extends keyof FeatureFlagsValue>(key: K) => useFeatureFlags()[key]
