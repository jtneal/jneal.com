/* eslint-disable */
export default {
  displayName: 'shared-dtos',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/dtos',
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'test-results/shared-dtos' }]],
};
