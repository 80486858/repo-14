import bodyNumber from "../../keywords/rules/bodyNumber.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если номер кузова не содержит от 9 до 12 символов или содержит нецифры и не латинские символы', () => {
    const invalidBodyNumber = 'ABC12345'; // Номер кузова содержит нецифры и не латинские символы
    const errorMessage = bodyNumber.errorMessage();
    const isValid = bodyNumber.condition(invalidBodyNumber);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('Номер кузова должен быть длинной 9-12 символов и содержать только цифры и латиницу');
  });

  it('Должен вернуть true, если номер кузова содержит от 9 до 12 символов и состоит только из цифр и латинских символов', () => {
    const validBodyNumber = '1234ABCD5678'; // Номер кузова содержит 12 символов и состоит только из цифр и латинских символов
    const isValid = bodyNumber.condition(validBodyNumber);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если номер кузова пуст', () => {
    const emptyBodyNumber = ''; // Пустой номер кузова
    const isValid = bodyNumber.condition(emptyBodyNumber);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если номер кузова содержит более 12 символов', () => {
    const longBodyNumber = '1234567890ABCD'; // Номер кузова содержит более 12 символов
    const isValid = bodyNumber.condition(longBodyNumber);

    expect(isValid).toBe(false);
  });
});
