import { createContext } from "react";

const GameContext = createContext({
  gameStatus: "",

  maxAttempts: 1,
  wordLengthPossibility: [],
  handleSetParameters: () => {},
  handleNewGame: () => {},

  targetWord: "",
  currentAttempts: 0,
  currentWord: "",
});

export default GameContext;
