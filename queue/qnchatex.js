function predictPartyVictory(s) {
  const radiantQueue = [];
  const direQueue = [];

  for (let i=0; i < s.length; i++) {
    if (s[i] === "R") {
      radiantQueue.push(i);
    } else {
      direQueue.push(i);
    }
  }
  const n = s.length;
  while (radiantQueue.length > 0 && direQueue.length > 0) {
    const radiantIndex = radiantQueue.shift();
    const direIndex = direQueue.shift();

    if (radiantIndex < direIndex) {
      radiantQueue.push(n + radiantIndex);
    } else {
      direQueue.push(n + direIndex);
    }

  }

  return radiantQueue.length > 0 ? "R" : "D";
}



console.log(predictPartyVictory("DRR"))
console.log(predictPartyVictory("DDR"))