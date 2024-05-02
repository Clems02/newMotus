import { Box, styled } from "@mui/material";
import GuessBoardCell from "./GuessBoardCell";

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "10px",
}));

const GuessBoardRow = ({ row, activeRow }) => {
  return (
    <BoxStyled>
      {row.map(({ value, status }, index) => {
        return (
          <GuessBoardCell
            key={index}
            letter={activeRow && value}
            status={status}
          />
        );
      })}
    </BoxStyled>
  );
};

export default GuessBoardRow;
