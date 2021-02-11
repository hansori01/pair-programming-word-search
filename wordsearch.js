//Pair programming with Kyle Lemmon
//We were unable to finish stretch due to time. May come back

const wordSearch = (letters, word) => {
  //joins letters into horizontal arrays
  let horizontalJoin = letters.map(ls => ls.join(''));
  //loop through horizontal arrays
  for (let l of horizontalJoin) {
    //if current array includes word, return true;
    if (l.includes(word)) return true;
  }

  //if case above is false, try flipping
  const verticalToHorizontal = [];
  for (let j = 0; j < letters[0].length; j++) {
    let val = [];
    for (let a = 0; a < letters.length; a++) {
      val.push(letters[a][j]);
    }
    verticalToHorizontal.push(val);
  }

  let verticalToHorizontalJoin = verticalToHorizontal.map(ls => ls.join(''));
  for (let l of verticalToHorizontalJoin) {
    if (l.includes(word)) return true;
  }
  const reverseEach = letters.map(r => r.reverse());
  const reverseJoin = reverseEach.map(ls => ls.join(''));
  for (let l of reverseJoin) {
    if (l.includes(word)) return true;
  }
  const reverseEachTwo = verticalToHorizontal.map(r => r.reverse());
  const reverseJoinTwo = reverseEachTwo.map(ls => ls.join(''));
  for (let l of reverseJoinTwo) {
    if (l.includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;



