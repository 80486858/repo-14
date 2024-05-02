module.exports = {
  // Пути к файлам с тестами
  testMatch: ["<rootDir>/src/__tests__/**/*.test.js"],

  // Путь к папке с кодом приложения
  // Необходимо для покрытия кода тестами (code coverage)
  roots: ["<rootDir>/src"],

  // Путь к папке, куда Jest будет сохранять данные о покрытии кода тестами
  coverageDirectory: "<rootDir>/coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // Массив расширений файлов, в которых могут находиться тесты
  moduleFileExtensions: ["js", "json", "jsx", "node", "mjs"],
};
