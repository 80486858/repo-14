import cyrillic from "../../keywords/rules/cyrillic.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если ввод не содержит только кириллицу', () => {
    const invalidInput = 'Hello, world!'; // Ввод содержит латинские символы
    const errorMessage = cyrillic.errorMessage();
    const isValid = cyrillic.condition(invalidInput);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('Для ввода доступна только кириллица.');
  });

  it('Должен вернуть true, если ввод содержит только кириллицу', () => {
    const validInput = 'Привет, мир!'; // Ввод содержит только кириллицу
    const isValid = cyrillic.condition(validInput);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если ввод пуст', () => {
    const emptyInput = ''; // Пустой ввод
    const isValid = cyrillic.condition(emptyInput);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть true, если ввод содержит только цифры', () => {
    const digitsInput = '1234567890'; // Ввод содержит только цифры
    const isValid = cyrillic.condition(digitsInput);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть true, если ввод содержит символы кириллицы и пробелы', () => {
    const cyrillicWithSpaces = 'Привет, как дела?'; // Ввод содержит символы кириллицы и пробелы
    const isValid = cyrillic.condition(cyrillicWithSpaces);

    expect(isValid).toBe(true);
  });
});
