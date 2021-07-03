const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(js|ts)$": "ts-jest"
  },
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
};