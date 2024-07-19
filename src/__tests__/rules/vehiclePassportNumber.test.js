import vehiclePassportNumber from "../../keywords/rules/vehiclePassportNumber.js";

describe('Тесты валидатора номера ПТС', () => {
  it('Должен вернуть сообщение об ошибке, если номер ПТС не содержит 10 символов', () => {
    const invalidVin = '789654321'; // содержит менее 10 символов
    const errorMessage = vehiclePassportNumber.errorMessage();
    const isValid = vehiclePassportNumber.condition(invalidVin);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('Номер ПТС должен быть длиной 10 символов и содержать только цифры и кириллицу');
  });

  it('Должен вернуть true, если номер ПТС корректный', () => {
    const validVin = '77ТМ181468'; // Валидный номер ПТС
    const isValid = vehiclePassportNumber.condition(validVin);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если номер ПТС содержит символы латиницы', () => {
    const vinWithCyrillic = '77TM181468'; // номер ПТС содержит символы латиницы
    const isValid = vehiclePassportNumber.condition(vinWithCyrillic);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если номер ПТС пуст', () => {
    const emptyVin = ''; // Пустой номер ПТС
    const isValid = vehiclePassportNumber.condition(emptyVin);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если номер ПТС содержит недопустимые символы', () => {
    const vinWithInvalidChars = '77TM1_1468'; // номер ПТС содержит недопустимые символы
    const isValid = vehiclePassportNumber.condition(vinWithInvalidChars);

    expect(isValid).toBe(false);
  });
});
