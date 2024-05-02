import snils from "../../keywords/rules/snils.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если СНИЛС введен некорректно', () => {
    const invalidSnils = '123-456-789 01'; // Некорректный СНИЛС
    const errorMessage = snils.errorMessage();
    const isValid = snils.condition(invalidSnils);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('СНИЛС введен некорректно');
  });

  it('Должен вернуть true, если СНИЛС проходит проверку по контрольной сумме', () => {
    const validSnils = '627-596-779 60'; // Валидный СНИЛС
    const isValid = snils.condition(validSnils);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если СНИЛС пуст', () => {
    const emptySnils = ''; // Пустой СНИЛС
    const isValid = snils.condition(emptySnils);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если СНИЛС содержит буквы', () => {
    const snilsWithLetters = '123-456-789 X2'; // СНИЛС содержит буквы
    const isValid = snils.condition(snilsWithLetters);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если СНИЛС содержит неверную контрольную сумму', () => {
    const invalidChecksumSnils = '123-456-789 97'; // СНИЛС содержит неверную контрольную сумму
    const isValid = snils.condition(invalidChecksumSnils);

    expect(isValid).toBe(false);
  });
});
