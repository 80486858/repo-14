export default {
  errorMessage: () => {
    return "Для ввода доступна только латиница.";
  },
  condition: (value) => {
    const regex = /^[0-9a-z.,:!?()";_/\\'\-\s]+$/i;

    return regex.test(value);
  },
};
