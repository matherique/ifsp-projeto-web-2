const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(js|ts)$": "ts-jest"
  },
  testMatch: ["<rootDir>src/__test__/**/*.test.ts"], //(src/__tests__/.*|(\\.|/)(test|spec))\\.ts?$"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
