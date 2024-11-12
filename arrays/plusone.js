const plusOne = function (digits) {
  const lastDigit = digits[digits.length - 1];
  if (lastDigit !== 9) {
    const add = lastDigit + 1;
    digits[digits.length - 1] = add;
    return digits;
  } else {
    for (i = digits.length - 1; i >= 0; i++) {
      if (i - 1) {
        digits[i] = 0;
        digits[0] = digits[0] + 1;
      } else {
        digits[i] = 0;
        digits[0] = 1;
      }
    }
  }
};

const result = plusOne([9]);
console.log(result);
