// jest.e2e.config.js
module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['expect-puppeteer'],
  testPathIgnorePatterns: ['/test/unit/'],
}
