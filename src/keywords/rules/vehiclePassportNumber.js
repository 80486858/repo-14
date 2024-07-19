export default {
  errorMessage: () => {
    return "Номер ПТС должен быть длиной 10 символов и содержать только цифры и кириллицу";
  },
  condition: (value) => {
    const regex = /^\d{2}[\dА-ЯЁё]{2}\d{6}$/;

    return regex.test(value);
  },
};
