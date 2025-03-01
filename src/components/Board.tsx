// "use client";

// import { Chessboard } from "react-chessboard";
// import { Chess } from "chess.js";
// import { useEffect, useRef, useState } from "react";
// import { useGameContext } from "@/context/GameContext";

// const Board: React.FC = () => {
//   const boardRef = useRef(null);
//   const { game, currentMoveIndex } = useGameContext();
//   const [chess] = useState(new Chess()); // Initialize a Chess.js instance
//   const [fen, setFen] = useState(chess.fen()); // Store the current position

//   // Update chess position when the move index changes
//   useEffect(() => {
//     if (game) {
//       chess.reset(); // Reset board
//       for (let i = 0; i <= currentMoveIndex; i++) {
//         chess.move(game.moves[i].movePlayed); // Apply moves up to current index
//       }
//       setFen(chess.fen()); // Update board position
//     }
//   }, [currentMoveIndex, game, chess]);

//   return (
//     <Chessboard 
//         ref={boardRef}
//         id="basicchessgame"
//         arePiecesDraggable={false}
//         position={fen}
//         customDarkSquareStyle={{ backgroundColor: "#779952" }}
//         customLightSquareStyle={{ backgroundColor: "#edeed1" }}
//       />
//   );
// }

// export default Board;
"use client";

import { useGameContext } from "@/context/GameContext";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";

export default function ChessboardComponent() {
  const { game, currentMoveIndex } = useGameContext();
  const [chess] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());
  console.log(game)
  // Update board when move index changes
  useEffect(() => {
    console.log("Move Index:", currentMoveIndex);
    
    if (!game || !game.moves || game.moves.length === 0) {
      console.warn("Game data is missing or moves are empty.");
      return;
    }

    chess.reset();

    for (let i = 0; i <= currentMoveIndex && i < game.moves.length; i++) {
      if (game.moves[i]?.movePlayed) {
        chess.move(game.moves[i].movePlayed);
      } else {
        console.warn(`Move at index ${i} is undefined`);
      }
    }

    setFen(chess.fen());
  }, [currentMoveIndex, game]);

  return <Chessboard position={fen} />;
}
