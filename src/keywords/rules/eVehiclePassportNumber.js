export default {
  errorMessage: () => {
    return "Номер ЭПТС должен быть длиной 15 символов и содержать только цифры";
  },
  condition: (value) => {
    const regex = /\d{15}/;

    return regex.test(value);
  },
};
