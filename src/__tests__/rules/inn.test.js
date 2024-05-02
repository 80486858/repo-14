import inn from "../../keywords/rules/inn.js";

describe('Тесты валидатора', () => {
  it('Должен вернуть сообщение об ошибке, если ИНН введен некорректно', () => {
    const invalidInn = '12345678901'; // Некорректный ИНН
    const errorMessage = inn.errorMessage();
    const isValid = inn.condition(invalidInn);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('ИНН введен некорректно');
  });

  it('Должен вернуть true, если ИНН содержит 10 символов и проходит проверку по контрольной сумме', () => {
    const validInn10 = '7707083893'; // Валидный ИНН с 10 символами
    const isValid = inn.condition(validInn10);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть true, если ИНН содержит 12 символов и проходит проверку по контрольной сумме', () => {
    const validInn12 = '500100732259'; // Валидный ИНН с 12 символами
    const isValid = inn.condition(validInn12);

    expect(isValid).toBe(true);
  });

  it('Должен вернуть false, если ИНН содержит буквы', () => {
    const innWithLetters = '12AB5678901'; // ИНН содержит буквы
    const isValid = inn.condition(innWithLetters);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если ИНН содержит неверную контрольную сумму', () => {
    const invalidChecksumInn = '1234567891'; // ИНН содержит неверную контрольную сумму
    const isValid = inn.condition(invalidChecksumInn);

    expect(isValid).toBe(false);
  });

  it('Должен вернуть false, если ИНН пуст', () => {
    const emptyInn = ''; // Пустой ИНН
    const isValid = inn.condition(emptyInn);

    expect(isValid).toBe(false);
  });
});
