import { Box, Button, Card, Typography, styled } from "@mui/material";
import useSound from "../hooks/useSound";
import { useEffect } from "react";

const GuessBoardCell = ({ letter, status }) => {
  // const { playSound } = useSound();

  // useEffect(() => {
  //   if (status === "UNKNOWN") return;
  //   playSound(status, 0);
  // }, [status]);

  return (
    <Card variant={status}>
      <Typography>{letter}</Typography>
    </Card>
  );
};

export default GuessBoardCell;
