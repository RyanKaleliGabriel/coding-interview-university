function isValid(s) {
  const bracketMap = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  const stack = [];

  for (const char of s) {
    if (bracketMap[char]) {
      const topElement = stack.length > 0 ? stack.pop() : "#";
      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"))
console.log(isValid("[](}"))