"use client";
import { Volume2 } from "lucide-react";

const NameAudio = () => {
  const handleAudioPlay = () => {
    const audio = new Audio("/name-audio.mp3");
    audio.play();
  };

  return (
    <Volume2
      size={20}
      className="text-muted-foreground cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleAudioPlay}
    />
  );
};

export default NameAudio;
