/* eslint-disable */
export default {
  displayName: 'bff',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/bff',
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'test-results/bff' }]],
};
