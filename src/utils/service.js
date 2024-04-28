import { WORDS } from "./data";

export const randomWord = (lengthPossible) => {
  const possibleWords = WORDS.filter((word) =>
    lengthPossible.includes(word.length)
  );

  const word = possibleWords[Math.trunc(Math.random() * possibleWords.length)];
  return word.toUpperCase();
};

export const isLetter = (letter) => {
  return letter.length === 1 && letter.match(/[a-z]/i);
};
