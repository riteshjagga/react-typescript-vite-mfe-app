module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

   rootDir: __dirname,
  // Where Jest should look for tests
  roots: ['<rootDir>/src'],

  testMatch: ['**/*.test.ts?(x)'],
  // File extensions Jest understands
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // Runs before every test file
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

  // Ignore Vite build output
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
