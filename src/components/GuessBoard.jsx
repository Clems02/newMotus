import { Box } from "@mui/material";
import React from "react";
import useGame from "../hooks/useGame";
import GuessBoardRow from "./GuessBoardRow";

const GuessBoard = () => {
  const { maxAttempts } = useGame();

  return (
    <Box>
      {Array.from({ length: maxAttempts })
        .fill("")
        .map((_, index) => {
          return <GuessBoardRow key={index} />;
        })}
    </Box>
  );
};

export default GuessBoard;
