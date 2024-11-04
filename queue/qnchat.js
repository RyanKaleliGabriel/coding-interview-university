// Given a string s containing characters R and D, representing two types of people standing in a queue,
// return the winner of the queue. Here’s how it works:

// Rules: Each round, the first person in the queue can "ban" someone from the other team who is ahead in line.
// If a person of type R is at the front, they ban the first D in the queue after them, and vice versa.
// Once banned, the person is removed from the queue for the next rounds.
// This continues until only one type of person is left in the queue.

// Output:
// If all remaining people are of type R, return "R".
// If all remaining people are of type D, return "D"

// Example:
// Input: s = "RDD"
// Output: "D"

// Explanation:
// R bans the first D that follows.
// The next D bans the first R.
// Only D remains, so the output is "D".

// Constraints:
// 1 <= s.length <= 10^4
// s consists of only characters 'R' and 'D'.


// Solution.

// Create two queues:
// One for indices of R (Radiant).
// One for indices of D (Dire).

// Initialize each queue by iterating over the input string s:
// Push each R’s index to the Radiant queue.
// Push each D’s index to the Dire queue.


//  The person with the smaller index gets to ban the other. The "winner" gets re-enqueued with their new index at the end of the line,
//  which is adjusted to represent the "next round" (current index + length of the string).
//  Continue until only one queue is left with elements, indicating that team as the winner.


function predictPartyVictory(s) {
  const radiantQueue = [];
  const direQueue = [];

  //Fill the queues with indicies of R and D
  for (let i=0; i < s.length; i++) {
    if (s[i] === "R") {
      radiantQueue.push(i);
    } else {
      direQueue.push(i);
    }
  }

  const n = s.length;
  // Process the queues until one of them is empty
  while (radiantQueue.length > 0 && direQueue.length > 0) {
    const radiantIndex = radiantQueue.shift();
    const direIndex = direQueue.shift();

    //The person with the smaller index bans the other
    if (radiantIndex < direIndex) {
      // Radiant wins this round; re-enqueue at a new position
      radiantQueue.push(radiantIndex + n);
    } else {
      // Dire wins this round; re-enqueue at a new position
      direQueue.push(direIndex + n);
    }
  }

  return radiantQueue.length > 0 ? "R" : "D";
}

console.log(predictPartyVictory("DRD"));
console.log(predictPartyVictory("DDR"));
console.log(predictPartyVictory("RDD"));
console.log(predictPartyVictory("RDR"));

// Complexity analysis
// - Time complexity: O(n), since each index is processed and re-enqueued only once per round.
// - Space Complexity: O(n), for the two queues storing indices of R and D.