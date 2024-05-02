import latin from "../../keywords/rules/latin.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если ввод не содержит только латиницу', () => {
    const invalidInput = 'Привет, мир!'; // Ввод содержит кириллицу
    const errorMessage = latin.errorMessage();
    const isValid = latin.condition(invalidInput);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('Для ввода доступна только латиница.');
  });

  it('Должен вернуть true, если ввод содержит только латиницу', () => {
    const validInput = 'Hello, world!'; // Ввод содержит только латиницу
    const isValid = latin.condition(validInput);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если ввод пуст', () => {
    const emptyInput = ''; // Пустой ввод
    const isValid = latin.condition(emptyInput);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть true, если ввод содержит только цифры', () => {
    const digitsInput = '1234567890'; // Ввод содержит только цифры
    const isValid = latin.condition(digitsInput);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть true, если ввод содержит символы латиницы и пробелы', () => {
    const latinWithSpaces = 'Hello, how are you?'; // Ввод содержит символы латиницы и пробелы
    const isValid = latin.condition(latinWithSpaces);

    expect(isValid).toBe(true);
  });
});
