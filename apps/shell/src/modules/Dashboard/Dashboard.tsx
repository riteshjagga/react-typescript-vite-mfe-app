import { useFeatureFlag } from '@workspace/shared/contexts/feature-flags'

export default function Dashboard() {
  const isFeature1Enabled = useFeatureFlag('feature1')
  const isFeature2Enabled = useFeatureFlag('feature2')

  console.log('Feature 1 Enabled:', isFeature1Enabled)
  console.log('Feature 2 Enabled:', isFeature2Enabled)

  return (
    <div className="p-4 text-lg">
      Dashboard Page
      <ul>
        <li>Feature 1: {isFeature1Enabled ? 'Enabled' : 'Disabled'}</li>
        <li>Feature 2: {isFeature2Enabled ? 'Enabled' : 'Disabled'}</li>
      </ul>
    </div>
  )
}
