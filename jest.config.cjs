module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    // setupFiles: ['./jest.setup.js']
    // collectCoverageFrom: ['src/*/.js','!src/*/archivo.js'],
    "transform": {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    coveragePathIgnorePatterns: ["<rootDir>/src/components/NewsList/mockApiResponse.js"]
}