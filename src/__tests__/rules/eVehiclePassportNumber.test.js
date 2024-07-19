import eVehiclePassportNumber from "../../keywords/rules/eVehiclePassportNumber.js";

describe('Тесты валидатора номера ПТС', () => {
  it('Должен вернуть сообщение об ошибке, если номер ЭПТС не содержит 15 символов', () => {
    const invalidVin = '789654321'; // содержит менее 15 символов
    const errorMessage = eVehiclePassportNumber.errorMessage();
    const isValid = eVehiclePassportNumber.condition(invalidVin);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('Номер ЭПТС должен быть длиной 15 символов и содержать только цифры');
  });

  it('Должен вернуть true, если номер ПТС корректный', () => {
    const validVin = '123456789789456'; // Валидный номер ПТС
    const isValid = eVehiclePassportNumber.condition(validVin);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если номер ПТС длиннее 15 символов', () => {
    const validVin = '1234567897894561111';
    const isValid = eVehiclePassportNumber.condition(validVin);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если номер ЭПТС содержит буквы', () => {
    const vinWithCyrillic = '77TM181468'; // номер ПТС содержит символы латиницы
    const isValid = eVehiclePassportNumber.condition(vinWithCyrillic);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если номер ПТС пуст', () => {
    const emptyVin = ''; // Пустой номер ПТС
    const isValid = eVehiclePassportNumber.condition(emptyVin);

    expect(isValid).toBe(false);
  });
});
