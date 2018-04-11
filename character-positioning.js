function countLetters(inStr) {

  var count = {};
  var arrayStr = inStr.split("");

  for (var i = 0; i < arrayStr.length; i++) {
    count[arrayStr[i]] ? count[arrayStr[i]].push(i) : count[arrayStr[i]] = [i];
  }

  delete count[" "];
  return count;
}
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("the quick brown fox jumped over the lazy dog"));