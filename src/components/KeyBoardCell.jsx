import { Box, Typography, styled } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const BoxStyled = styled(Box)(({ theme }) => ({
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
}));

const KeyBoardCell = ({ letter, onClick }) => {
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
    <BoxStyled onClick={onClick}>
      <Typography>{letter}</Typography>
    </BoxStyled>
  );
};

export default KeyBoardCell;
