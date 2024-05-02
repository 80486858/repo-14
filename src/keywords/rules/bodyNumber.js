export default {
  errorMessage: () => {
    return "Номер кузова должен быть длинной 9-12 символов и содержать только цифры и латиницу";
  },
  condition: (value) => {
    const regex = /^([0-9A-Z]{9,12})$/;

    return regex.test(value);
  },
};
