import bik from "../../keywords/rules/bik.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если БИК не содержит от 6 до 9 цифр', () => {
    const invalidBik = '12345'; // БИК содержит меньше 6 цифр
    const errorMessage = bik.errorMessage();
    const isValid = bik.condition(invalidBik);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('БИК должен содержать 6-9 цифр');
  });

  it('Должен вернуть true, если БИК содержит от 6 до 9 цифр', () => {
    const validBik = '1234567'; // БИК содержит 7 цифр
    const isValid = bik.condition(validBik);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если БИК содержит более 9 цифр', () => {
    const longBik = '1234567890'; // БИК содержит больше 9 цифр
    const isValid = bik.condition(longBik);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если БИК содержит нецифровые символы', () => {
    const bikWithNonDigits = '12345a'; // БИК содержит нецифровые символы
    const isValid = bik.condition(bikWithNonDigits);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если БИК пуст', () => {
    const emptyBik = ''; // Пустой БИК
    const isValid = bik.condition(emptyBik);

    expect(isValid).toBe(false);
  });
});
