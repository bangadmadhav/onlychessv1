"use client";

import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useRef, useState } from "react";

export default function Board() {
  const [game, setGame] = useState<Chess>(new Chess());
  const boardRef = useRef(null);

  return (
    <Chessboard 
        ref={boardRef}
        id="basicchessgame"
        arePiecesDraggable={false}
        customDarkSquareStyle={{ backgroundColor: "#779952" }}
        customLightSquareStyle={{ backgroundColor: "#edeed1" }}
      />
  );
}
