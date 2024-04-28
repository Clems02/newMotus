import { Box } from "@mui/material";
import useGame from "../hooks/useGame";
import GuessBoardCell from "./GuessBoardCell";

const GuessBoardRow = () => {
  const { targetWord } = useGame();

  return (
    <Box>
      {[...targetWord].map((letter, index) => {
        return <GuessBoardCell key={index} letter={letter} />;
      })}
    </Box>
  );
};

export default GuessBoardRow;
