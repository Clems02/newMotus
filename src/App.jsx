import { useEffect } from "react";
import Theme from "./theme/Theme";
import useSound from "./hooks/useSound";
import { Button } from "@mui/material";
import GameProvider from "./context/GameProvider";
import KeyBoard from "./components/KeyBoard";
import GuessBoard from "./components/GuessBoard";

const App = () => {
  const { playSound } = useSound();

  return (
    <Theme>
      <GameProvider>
        <Button onClick={() => playSound("LR", 1000)}>Play</Button>
        <GuessBoard />
        <KeyBoard />
      </GameProvider>
    </Theme>
  );
};

export default App;
