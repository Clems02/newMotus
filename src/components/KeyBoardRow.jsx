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
      {row.map(({ value, status }, index) => {
        return (
          <KeyBoardCell
            letter={value}
            status={status}
            key={index}
            onClick={() => handleClick(value)}
          />
        );
      })}
    </BoxStyled>
  );
};

export default KeyBoardRow;
