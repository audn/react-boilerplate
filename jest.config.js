module.exports = {
  clearMocks: true,
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/_app.js',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/coverage/**',
    '!**/*.config.js'
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^~(.*)$': '<rootDir>/src$1',
    '^@root(.*)$': '<rootDir>/$1'
  },
  transform: {
    '\\.ya?ml$': 'yaml-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  }
}
