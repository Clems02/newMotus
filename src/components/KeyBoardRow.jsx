import { Box, styled } from "@mui/material";
import KeyBoardCell from "./KeyBoardCell";
import useGame from "../hooks/useGame";

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const KeyBoardRow = ({ row }) => {
  const { gameStatus } = useGame();

  const handleClick = (key) => {
    if (gameStatus !== "PLAYING") return;

    if (key === "SUPP") {
      console.log("Logique de supp lettre");
      return;
    }

    if (key === "ENTER") {
      console.log("Logique de submit");
      return;
    }

    console.log("Logique add letter");
  };

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
