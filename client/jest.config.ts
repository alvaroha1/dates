module.exports = {
  "preset": "ts-jest/presets/js-with-ts",
  "testEnvironment": "jsdom",  
  "moduleFileExtensions": ['js', 'jsx', 'ts', 'tsx', 'json', 'node',"d.ts"],
  "verbose": true,
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  },
  "setupFilesAfterEnv": ['<rootDir>/setupTests.js'],
};

export { };
