module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // If you're using CSS modules or other assets, you might need mappers here too
    // For example: '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // If ts-jest was handling module resolution for paths, babel-jest might need help
  // moduleDirectories: ['node_modules', 'src'], // Example if needed
  testRegex: [
    "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$", // Default
    "<rootDir>/src/app/api/auth/\\[\\.\\.\\.nextauth\\]/callbacks\\.test\\.ts$"
  ]
};
