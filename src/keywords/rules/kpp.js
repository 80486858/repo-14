export default {
  errorMessage: () => {
    return "КПП должен содержать 9 цифр";
  },
  condition: (value) => {
    const regex = /^(\d{9})$/;

    return regex.test(value);
  },
};
