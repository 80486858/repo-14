import kpp from "../../keywords/rules/kpp.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если КПП не содержит 9 цифр', () => {
    const invalidKpp = '12345678'; // КПП содержит меньше 9 цифр
    const errorMessage = kpp.errorMessage();
    const isValid = kpp.condition(invalidKpp);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('КПП должен содержать 9 цифр');
  });

  it('Должен вернуть true, если КПП содержит ровно 9 цифр', () => {
    const validKpp = '123456789'; // КПП содержит ровно 9 цифр
    const isValid = kpp.condition(validKpp);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если КПП содержит буквы', () => {
    const kppWithLetters = '1234567A9'; // КПП содержит буквы
    const isValid = kpp.condition(kppWithLetters);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если КПП содержит символы кроме цифр', () => {
    const kppWithSymbols = '12345#789'; // КПП содержит символы кроме цифр
    const isValid = kpp.condition(kppWithSymbols);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если КПП пуст', () => {
    const emptyKpp = ''; // Пустой КПП
    const isValid = kpp.condition(emptyKpp);

    expect(isValid).toBe(false);
  });
});
