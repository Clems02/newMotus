import GameContext from "./GameContext";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { getBestWord, getStatusLetter } from "../utils/service";
import { delay } from "../utils/data";
import useSound from "../hooks/useSound";

const GameProvider = ({ children }) => {
  const { playSound } = useSound();
  const [gameStatus, setGameStatus] = useState("PLAYING");

  const [maxAttempts, setMaxAttempts] = useState(6);
  const [wordLengthPossibility, setWordLengthPossibility] = useState([5, 6, 7]);

  const [attemptsWords, setAttemptsWords] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState(0);

  const [currentIndexLetter, setCurrentIndexLetter] = useState(0);

  /**
   * => Valeur pour variant square <=
   *        UNKNOWN
   *        BON
   *        ABSENT
   *        INCORRECT
   *
   * => Valeur pour gameStatus <=
   *        WIN
   *        LOSED
   *        PLAYING
   */

  useEffect(() => {
    handleNewGame();
  }, [wordLengthPossibility, maxAttempts]);

  /**
   * @param {Number} attempts
   * @param {Array} wordLength
   */
  const handleSetParameters = (attempts, wordLength) => {
    setMaxAttempts(attempts);
    setWordLengthPossibility(wordLength);
  };

  const handleNewGame = () => {
    //const word = randomWord(wordLengthPossibility);
    const word = "CANARD";
    setTargetWord(word.split(""));

    setAttemptsWords(
      Array.from({ length: maxAttempts }, () =>
        Array.from({ length: word.length }).fill(
          new Object({ value: "_", status: "UNKNOWN" })
        )
      )
    );

    setCurrentAttempt(0);
    setGameStatus("PLAYING");
    setCurrentIndexLetter(0);
  };

  const handleAddLetter = (value) => {
    const word = attemptsWords[currentAttempt];

    if (currentIndexLetter === word.length) return;

    const newArray = [...attemptsWords];
    const { status } = word[currentIndexLetter];
    word[currentIndexLetter] = { value, status };
    setAttemptsWords(newArray);

    if (currentIndexLetter === targetWord.length) return;

    setCurrentIndexLetter((prev) => prev + 1);
  };

  const handleRemoveLetter = () => {
    const word = attemptsWords[currentAttempt];

    if (currentIndexLetter === 0) return;

    const newArray = [...attemptsWords];
    word[currentIndexLetter - 1].value = "_";
    setAttemptsWords(newArray);
    setCurrentIndexLetter((prev) => prev - 1);
  };

  const handleSubmitWord = () => {
    const attemptWord = attemptsWords[currentAttempt];

    if (attemptWord.some(({ value }) => value === "_")) return;

    const attemptWordStatus = getStatusLetter(attemptWord, targetWord);

    for (let x = 0; x < attemptWordStatus.length; x++) {
      setTimeout(
        () => {
          const newArray = [...attemptsWords];
          newArray[currentAttempt][x] = attemptWordStatus[x];
          playSound(attemptWordStatus[x].status, 0);
          setAttemptsWords(newArray);
        },
        (x + 1) * delay
      );
    }

    setTimeout(
      () => {
        const win = attemptWord.every(({ status }) => status === "BON");
        if (win) {
          setGameStatus("WIN");
          playSound("WIN", 0);
        }

        if (!win && currentAttempt === maxAttempts - 1) {
          setGameStatus("LOSED");
          playSound("LOSED", 0);
        } else {
          const newArray = [...attemptsWords];
          newArray[currentAttempt + 1] = getBestWord(attemptsWords);
          setAttemptsWords(newArray);
          setCurrentAttempt((prev) => prev + 1);
          setCurrentIndexLetter(0);
        }
      },
      (targetWord.length + 1) * delay
    );
  };

  return (
    <GameContext.Provider
      value={{
        gameStatus,
        maxAttempts,
        wordLengthPossibility,
        targetWord,
        currentAttempt,
        attemptsWords,
        handleSetParameters,
        handleNewGame,
        handleRemoveLetter,
        handleAddLetter,
        handleSubmitWord,
      }}
    >
      Target word: {targetWord} <br />
      currentAttempts: {currentAttempt} <br />
      maxAttempts: {maxAttempts} <br />
      current index Letter: {currentIndexLetter}
      <Button
        variant='contained'
        size='small'
        onClick={() => setCurrentAttempt(currentAttempt + 1)}
      >
        +1 currentAttempts
      </Button>
      <Button
        variant='contained'
        size='small'
        onClick={() => console.log(attemptsWords)}
      >
        Clg attempsWords
      </Button>
      <Button onClick={() => handleNewGame()}>new game</Button>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
