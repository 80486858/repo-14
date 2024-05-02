export default {
  errorMessage: () => {
    return "Для ввода доступна только кириллица.";
  },
  condition: (value) => {
    const regex = /^[0-9а-яё.,:!?()";_/\\'\-\s]+$/i;

    return regex.test(value);
  },
};
