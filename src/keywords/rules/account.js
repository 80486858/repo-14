export default {
  errorMessage: () => {
    return "Счет должен содержать 20 цифр";
  },
  condition: (value) => {
    const regex = /^(\d{20})$/;

    return regex.test(value);
  },
};
