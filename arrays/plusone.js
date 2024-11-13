const plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry; //Add carry to the current digit
    if (sum === 10) {
      digits[i] = 0; // Set the current digit to zero if the sum is 10
      carry = 1; // Keep carry as 1 to add to the next digit
    } else {
      digits[i] = sum; // Set the current digit to sum if its less than 10
      carry = 0;
      break; // No more carry needed so break the loop
    }
  }

  // If there is still a carry after the loop, add a new digit at the beginning
  if (carry === 1) {
    //Shift all digits to the right by one position
    for (let i = digits.length; i > 0; i--) {
      digits[i] = digits[i - 1];
    }
    digits[0] = 1; //Set the first element to 1
  }

  return digits;
};

const result = plusOne([1, 9]);
console.log(result);
