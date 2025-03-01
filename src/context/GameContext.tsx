"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { GdataType } from "@/types/GameType";
import { Chess } from "chess.js";
import shuffleGame from "@/lib/shuffle";

interface GameContextProps {
  game: GdataType | null;
  currentMoveIndex: number;
  setGame: (game: GdataType) => void;
  nextMove: () => void;
  prevMove: () => void;
  isPlaying: boolean;
  togglePlay: () => void;
  shuffleNewGame: () => Promise<void>;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export function GameProvider({ children, initialGame }: { children: React.ReactNode; initialGame: GdataType | null }) {
  const [game, setGame] = useState<GdataType | null>(initialGame); // ✅ Use initialGame
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [chess] = useState(new Chess());

  // ✅ Only fetch a game if initialGame is missing
  useEffect(() => {
    const loadGame = async () => {
      if (!initialGame) { // Only fetch if there's no initial game
        const newGame = await shuffleGame();
        if (newGame) {
          setGame(newGame);
          chess.reset();
          setCurrentMoveIndex(0);
        }
      }
    };
    loadGame();
  }, []);

  // ✅ Shuffle new game function
  const shuffleNewGame = async () => {
    const newGame = await shuffleGame();
    if (newGame) {
      setGame(newGame);
      chess.reset();
      setCurrentMoveIndex(0);
    }
  };

  // ✅ Next move
  const nextMove = () => {
    if (!game || currentMoveIndex >= game.moves.length - 1) return;
    chess.move(game.moves[currentMoveIndex].movePlayed);
    setCurrentMoveIndex((prev) => prev + 1);
  };

  // ✅ Previous move
  const prevMove = () => {
    if (!game || currentMoveIndex === 0) return;
    chess.reset();
    for (let i = 0; i < currentMoveIndex - 1; i++) {
      chess.move(game.moves[i].movePlayed);
    }
    setCurrentMoveIndex((prev) => prev - 1);
  };

  // ✅ Auto-play effect
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        nextMove();
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // ✅ Toggle play/pause
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <GameContext.Provider value={{ game, currentMoveIndex, setGame, nextMove, prevMove, isPlaying, togglePlay, shuffleNewGame }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGameContext must be used within GameProvider");
  return context;
}
