import { Box, styled } from "@mui/material";
import KeyBoardCell from "./KeyBoardCell";
import useGame from "../hooks/useGame";

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const KeyBoardRow = ({ row, handleClick }) => {
  return (
    <BoxStyled>
      {row.map((letter, index) => {
        return (
          <KeyBoardCell
            letter={letter}
            key={index}
            onClick={() => handleClick(letter)}
          />
        );
      })}
    </BoxStyled>
  );
};

export default KeyBoardRow;
