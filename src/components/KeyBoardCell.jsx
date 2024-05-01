import { Box, Typography, styled } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import useGame from "../hooks/useGame";
import {
  amber,
  blue,
  blueGrey,
  green,
  grey,
  yellow,
} from "@mui/material/colors";

const BoxStyled = styled(Box)(({ theme, variant = "UNKNOWN" }) => ({
  border: "3px solid gray",
  backgroundColor: "#eeeee0",
  borderRadius: "5px",
  width: "40px",
  height: "40px",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  ...(variant === "UNKNOWN" && {
    border: `3px solid ${blueGrey["50"]}`,
    outline: `4px solid ${blueGrey["100"]}`,
    backgroundColor: blueGrey["100"],
  }),

  ...(variant === "BON" && {
    border: `3px solid ${green["900"]}`,
    outline: `4px solid ${green["700"]}`,
    backgroundColor: green["500"],
  }),

  ...(variant === "ABSENT" && {
    border: `3px solid ${grey["A700"]}`,
    outline: `4px solid ${grey[600]}`,
    backgroundColor: grey["600"],
  }),

  ...(variant === "INCORRECT" && {
    border: `3px solid ${yellow["400"]}`,
    outline: `4px solid ${yellow[700]}`,
    backgroundColor: amber["500"],
  }),
}));

const KeyBoardCell = ({ letter, onClick, status }) => {
  if (letter === "SUPP")
    return (
      <BoxStyled onClick={onClick}>
        <Typography>
          <BackspaceIcon sx={{ display: "flex" }} />
        </Typography>
      </BoxStyled>
    );

  if (letter === "ENTER")
    return (
      <BoxStyled onClick={onClick}>
        <Typography>
          <CheckBoxIcon sx={{ display: "flex" }} />
        </Typography>
      </BoxStyled>
    );

  return (
    <BoxStyled onClick={onClick} variant={status}>
      <Typography>{letter}</Typography>
    </BoxStyled>
  );
};

export default KeyBoardCell;
