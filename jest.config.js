export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
