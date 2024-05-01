import { Box, Button } from "@mui/material";
import KeyBoardRow from "./KeyBoardRow";
import useKeyBoard from "../hooks/useKeyBoard";
import useGame from "../hooks/useGame";
import { useEffect, useState } from "react";
import { getKeyBoard } from "../utils/service";

const KeyBoard = () => {
  useKeyBoard();
  const { gameStatus, handleAddLetter, handleRemoveLetter, attemptsWords } =
    useGame();
  const [keyBoardStatus, setKeyBoardStatus] = useState(getKeyBoard());

  useEffect(() => {
    if (keyBoardStatus !== 0) {
      const newArray = attemptsWords
        .reduce((acc, value) => {
          return acc.concat(value);
        }, [])
        .filter(({ value }) => value !== "");
      const filteredArray = newArray.reduce((acc, letter) => {
        const letterValue = letter.value;
        const letterStatus = letter.status;
        //N'existe pas encore, donc push dans tableau
        if (!acc.some((letter) => letter.value === letterValue)) {
          acc.push(letter);
          return acc;
        }
        //Existe déja dans tableau, donc need vérif status
        if (acc.some((letter) => letter.value === letterValue)) {
          if (letterStatus === "BON") {
            const index = acc.findIndex(
              (letter) => letter.value === letterValue
            );
            acc.splice(index, 1);
            acc.push(letter);
            return acc;
          }
        }
        return acc;
      }, []);
      //Modification du status des lettres du clavier si lettre dans filteredArray
      const newkeyList = [...keyBoardStatus];
      for (let x = 0; x < filteredArray.length; x++) {
        const value = filteredArray[x].value;
        for (let y = 0; y < newkeyList.length; y++) {
          const row = newkeyList[y];
          for (let z = 0; z < row.length; z++) {
            const letter = row[z].value;
            if (letter === value) {
              row[z].status = filteredArray[x].status;
            }
          }
        }
      }
      console.log(newkeyList);
      setKeyBoardStatus(newkeyList);
    }
  }, [attemptsWords]);

  const handleClick = (key) => {
    if (gameStatus !== "PLAYING") return;

    if (key === "SUPP") {
      handleRemoveLetter();
      return;
    }

    if (key === "ENTER") {
      console.log("Logique de submit");
      return;
    }

    handleAddLetter(key);
  };

  return (
    <Box>
      {keyBoardStatus.map((row, index) => {
        return <KeyBoardRow row={row} key={index} handleClick={handleClick} />;
      })}
    </Box>
  );
};

export default KeyBoard;
