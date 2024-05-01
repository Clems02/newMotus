import { Box } from "@mui/material";
import useGame from "../hooks/useGame";
import GuessBoardRow from "./GuessBoardRow";

const GuessBoard = () => {
  const { attemptsWords, currentAttempt } = useGame();

  return (
    <Box>
      {attemptsWords.map((row, index) => {
        return (
          <GuessBoardRow
            key={index}
            row={row}
            activeRow={currentAttempt >= index}
          />
        );
      })}
    </Box>
  );
};

export default GuessBoard;
