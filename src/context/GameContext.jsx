import { createContext } from "react";

const GameContext = createContext({
  gameStatus: "",

  maxAttempts: 1,
  wordLengthPossibility: [],
  handleSetParameters: () => {},
  handleNewGame: () => {},
  handleAddLetter: () => {},
  handleRemoveLetter: () => {},
  handleSubmitWord: () => {},

  targetWord: "",
  currentAttempt: 0,
  currentWord: "",
  attempsWords: [],
});

export default GameContext;
