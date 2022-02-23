"use strict";

const translateV1 = (word) => {
  let wordArray = word.split("");

  if (wordArray[0] === `a` || `e` || `i` || `o` || `u`) {
    return `${wordArray}way`;
  } else {
    // let consonant = word[0];
    let consonantWord = wordArray.push(wordArray.splice(index, 1)[0]);
    return `${consonantWord}ay`;
  }
};

const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter));
    return word.slice(index) + word.slice(0, index) + "ay";
  }
};
module.exports = { translate, translateV1 };
