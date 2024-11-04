// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Solution.
// 1. Push each open bracket onto the stack
// 2. When you encounter a close bracket, check if it matches the top bracket in the stack:
// if it matches, pop the top of the stack
// If it doesn't match or the stack is empty(indicating an unmatched close bracket), return false
//3. After processing all characters, check if the stack is empty
//if it is, return true(all open brackets were matched).
//if not, return false(some open brackets were not closed)

function isValid(s) {
  // Map of closing brackets to their corresponding opening brackets
  // bracketMap stores each closing bracket and its corressponding opening bracket.
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  //Traverse each character in the string
  for (const char of s) {
    //If it's a closing bracket
    if (bracketMap[char]) {
      // Check the top of the stack for the coressponding bracket
      const topElement = stack.length > 0 ? stack.pop() : "#";
      if (bracketMap[char] !== topElement) {
        return false;
      }
    } else {
      // Otherwise its an opening bracket , so push onto the stack
      stack.push(char);
    }
  }

  // If the stack is empty, all brackets were matched properly
  return stack.length === 0;
}

console.log(isValid("()")); 
// console.log(isValid("(]"));       // false


const bracketMap = {
    ")": "(",  
    "}": "{",
    "]": "[",
  };

  console.log(bracketMap[")"])

  // - Time Complexity O(n) since we iterate through each charater in the string
  // - Space Complexity O(n) for the stack, which may store all opening brackets in the worst case.