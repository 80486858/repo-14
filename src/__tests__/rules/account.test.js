import account from "../../keywords/rules/account.js";

describe('Тесты account', () => {
  it('Должен вернуть сообщение об ошибке, если номер счета не содержит 20 цифр', () => {
    const invalidAccountNumber = '123456789012345'; // Счет содержит меньше 20 цифр
    const errorMessage = account.errorMessage();
    const isValid = account.condition(invalidAccountNumber);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('Счет должен содержать 20 цифр');
  });

  it('Должен вернуть true, если номер счета содержит ровно 20 цифр', () => {
    const validAccountNumber = '12345678901234567890'; // Счет содержит ровно 20 цифр
    const isValid = account.condition(validAccountNumber);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если номер счета содержит нецифровые символы', () => {
    const accountNumberWithNonDigits = '1234567890abcd123456'; // Счет содержит нецифровые символы
    const isValid = account.condition(accountNumberWithNonDigits);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если номер счета пуст', () => {
    const emptyAccountNumber = ''; // Пустой счет
    const isValid = account.condition(emptyAccountNumber);

    expect(isValid).toBe(false);
  });
});
