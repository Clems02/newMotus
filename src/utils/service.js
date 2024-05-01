/* eslint-disable github/array-foreach */
import { WORDS, keyBoard } from "./data";

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

export const getStatusLetter = (attemptWord, targetWord) => {
  const tempoTargetWord = [...targetWord];
  const withStatusWord = JSON.parse(JSON.stringify(attemptWord));

  withStatusWord.forEach((letter, index) => {
    if (letter.value === tempoTargetWord[index]) {
      letter.status = "BON";
      tempoTargetWord[index] = "_";
    }
  });

  withStatusWord.forEach((letter, index) => {
    if (letter.status === "UNKNOWN") {
      const foundIndex = tempoTargetWord.indexOf(letter.value);
      if (foundIndex !== -1) {
        letter.status = "INCORRECT";
        tempoTargetWord[foundIndex] = "_";
      } else {
        letter.status = "ABSENT";
      }
    }
  });

  return withStatusWord;
};

export const getBestWord = (attemptsWords) => {
  const bestWord = [];

  for (const word of attemptsWords) {
    for (let x = 0; x < word.length; x++) {
      if (word[x].status === "BON") {
        bestWord[x] = { value: word[x].value, status: "UNKNOWN" };
      } else if (!bestWord[x]) {
        bestWord[x] = { value: "_", status: "UNKNOWN" };
      }
    }
  }
  return bestWord;
};

export const getKeyBoard = () => {
  const keyBoardRow = [];
  for (let x = 0; x < keyBoard.length; x++) {
    const array = [];
    for (let y = 0; y < keyBoard[x].length; y++) {
      array.push({ value: keyBoard[x][y], status: "UNKNOWN" });
    }
    keyBoardRow.push(array);
  }

  return keyBoardRow;
};
