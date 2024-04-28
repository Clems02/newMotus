/* eslint-disable react-hooks/exhaustive-deps */
import GameContext from "./GameContext";
import { useState, useEffect } from "react";
import { randomWord } from "../utils/service";

const GameProvider = ({ children }) => {
  const [gameStatus, setGameStatus] = useState("PLAYING");

  const [maxAttempts, setMaxAttempts] = useState(6);
  const [wordLengthPossibility, setWordLengthPossibility] = useState([5]);

  const [targetWord, setTargetWord] = useState("");
  const [currentAttempts, setCurrentAttempts] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

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
    setTargetWord(randomWord(wordLengthPossibility));
    setCurrentAttempts(0);
    setCurrentWord("");
    setGameStatus("PLAYING");
  };

  return (
    <GameContext.Provider
      value={{
        gameStatus,
        maxAttempts,
        wordLengthPossibility,
        targetWord,
        currentAttempts,
        currentWord,
        handleSetParameters,
        handleNewGame,
      }}
    >
      {targetWord}
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
