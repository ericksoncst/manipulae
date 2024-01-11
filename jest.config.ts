module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    'src/**/*.js',
  ],
  setupFilesAfterEnv: [`<rootDir>/setup.ts`],
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  },
  testEnvironmentOptions: {
    "url": "http://localhost:3006"
  }
}