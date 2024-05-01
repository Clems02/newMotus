import { useEffect } from "react";
import useGame from "./useGame";
import { isLetter } from "../utils/service";

const useKeyBoard = () => {
  const { gameStatus, handleAddLetter, handleRemoveLetter, handleSubmitWord } =
    useGame();

  useEffect(() => {
    const handleKeyDownT = (e) => {
      if (gameStatus !== "PLAYING") return;

      const key = e.key.toUpperCase();
      if (key === "ENTER") {
        handleSubmitWord();
      }

      if (key === "BACKSPACE") {
        handleRemoveLetter();
      }

      if (isLetter(key)) {
        handleAddLetter(key);
      }
    };

    document.addEventListener("keydown", handleKeyDownT);
    return () => {
      document.removeEventListener("keydown", handleKeyDownT);
    };
  });

  return;
};

export default useKeyBoard;
