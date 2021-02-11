//Pair programming with Kyle Lemmon
//We were unable to finish stretch due to time. May come back

const wordSearch = (letters, word) => { 
    //joins letters into horizontal arrays
    let horizontalJoin = letters.map(ls => ls.join(''))
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
    let verticalToHorizontalJoin = verticalToHorizontal.map(ls => ls.join(''))
    for (let l of verticalToHorizontalJoin) {
        //if current array includes word, return true;
        if (l.includes(word)) return true;
    }
    return false;
}
module.exports = wordSearch

// const horizontalJoinTwo = verticalToHorizontal.map(ls => ls.join(''))
// for (let l of horizontalJoinTwo) {
//     if (l.includes(word)) return true;
// }

// let reverse = letters.reverse();
// // console.log(reverse);


// // const reverseJoin = reverse.map(ls => ls.join(''))
// for (let l of letters.reverse().join('')) {
//     if (l.includes(word)) return true;
// }

// // const reverseTwo = verticalToHorizontal.reverse();

// // const reverseJoinTwo = reverseTwo .map(ls => ls.join(''))
// for (let l of horizontalJoinTwo.reverse().join('')) {
//     if (l.includes(word)) return true;
// }

