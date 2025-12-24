import { delay } from '@workspace/shared/lib/utils'

export type ApiResponse<T> = {
  data?: T
  error?: string
}

async function getFlags(): Promise<ApiResponse<Record<string, boolean>>> {
  await delay()

  return { data: { feature1: true, feature2: false } }
}

export const FeatureFlagsApi = {
  getFlags,
}
