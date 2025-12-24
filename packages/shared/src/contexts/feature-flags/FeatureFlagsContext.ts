import { createContext } from 'react'

export type FeatureFlagsValue = Record<string, boolean>

export const FeatureFlagsContext = createContext<FeatureFlagsValue>({})
