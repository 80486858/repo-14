import vehicleNumber from "../../keywords/rules/vehicleNumber.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если VIN не содержит 17 символов или содержит недопустимые символы', () => {
    const invalidVin = '123456789012345'; // VIN содержит меньше 17 символов
    const errorMessage = vehicleNumber.errorMessage();
    const isValid = vehicleNumber.condition(invalidVin);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('VIN должен быть длинной 17 символов и содержать только 0-9 и A,B,C,D,E,F,G,H,J,K,L,M,N,P,R,S,T,U,V,W,X,Y,Z');
  });

  it('Должен вернуть true, если VIN содержит ровно 17 символов и только допустимые символы', () => {
    const validVin = '1GNEK13Z33R124352'; // Валидный VIN
    const isValid = vehicleNumber.condition(validVin);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если VIN содержит символы кириллицы', () => {
    const vinWithCyrillic = '1GNEK13Z33R12435И'; // VIN содержит символы кириллицы
    const isValid = vehicleNumber.condition(vinWithCyrillic);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если VIN пуст', () => {
    const emptyVin = ''; // Пустой VIN
    const isValid = vehicleNumber.condition(emptyVin);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если VIN содержит недопустимые символы', () => {
    const vinWithInvalidChars = '1GNEK13Z33R1243@2'; // VIN содержит недопустимые символы
    const isValid = vehicleNumber.condition(vinWithInvalidChars);

    expect(isValid).toBe(false);
  });
});
