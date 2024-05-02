export default {
  errorMessage: () => {
    return "СНИЛС введен некорректно";
  },
  condition: (value) => {
    value = value.replace(/\D/g, '');
    let checkSum = parseInt(value.slice(9), 10);

    //строка как массив(для старых браузеров)
    value = '' + value;
    value = value.split('');

    let sum =
      value[0] * 9 +
      value[1] * 8 +
      value[2] * 7 +
      value[3] * 6 +
      value[4] * 5 +
      value[5] * 4 +
      value[6] * 3 +
      value[7] * 2 +
      value[8] * 1;

    if (sum < 100 && sum === checkSum) {
      return true;
    } else if ((sum === 100 || sum === 101) && checkSum === 0) {
      return true;
    } else if (sum > 101 && (sum % 101 === checkSum || (sum % 101 === 100 && checkSum === 0))) {
      return true;
    } else {
      return false;
    }
  },
};
