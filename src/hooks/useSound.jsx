import { useState } from "react";

const useSound = () => {
  const [volume, setVolume] = useState(1);

  const handleChangeVolume = (newVolume) => {
    setVolume(newVolume);
  };

  const playSound = (sound, timing) => {
    const audio = new Audio(`/${sound}.mp3`);
    audio.volume = volume;

    const timer = setTimeout(() => {
      audio.play();
    }, timing);

    return () => {
      clearTimeout(timer);
    };
  };

  return { handleChangeVolume, playSound };
};

export default useSound;
