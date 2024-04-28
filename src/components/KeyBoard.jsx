import { keyBoard } from "../utils/data";
import { Box } from "@mui/material";
import KeyBoardRow from "./KeyBoardRow";
import useKeyBoard from "../hooks/useKeyBoard";

const KeyBoard = () => {
  useKeyBoard();

  return (
    <Box>
      {keyBoard.map((row, index) => {
        return <KeyBoardRow row={row} key={index} />;
      })}
    </Box>
  );
};

export default KeyBoard;
