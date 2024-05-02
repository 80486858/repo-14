export default {
  errorMessage: () => {
    return "БИК должен содержать 6-9 цифр";
  },
  condition: (value) => {
    const regex = /^(\d{6,9})$/;

    return regex.test(value);
  },
};
