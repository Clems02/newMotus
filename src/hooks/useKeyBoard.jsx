import { useEffect } from "react";
import useGame from "./useGame";
import { isLetter } from "../utils/service";

const useKeyBoard = () => {
  const { gameStatus } = useGame();

  useEffect(() => {
    const handleKeyDownT = (e) => {
      if (gameStatus !== "PLAYING") return;

      const key = e.key.toUpperCase();
      if (key === "ENTER") {
        //onSubmit();
      }

      if (key === "BACKSPACE") {
        //onDelete();
      }

      if (isLetter(key)) {
        //onKeyDown(keyPress);
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
