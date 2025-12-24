const baseConfig = require('../../packages/test-config/jest.base.cjs')

module.exports = {
  ...baseConfig,
  rootDir: __dirname,                 // Must point to the MFE folder
  roots: ['<rootDir>/src'],           // Only scan src folder
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
 testPathIgnorePatterns: [
  '\\\\node_modules\\\\',  // double backslash for Windows paths
  '\\\\dist\\\\'
]
}
