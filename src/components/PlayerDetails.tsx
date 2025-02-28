import React from "react";
import { MdIndeterminateCheckBox } from "react-icons/md";

interface PlayerDetailsProps {
  playerName: string;
  playerSide?: string; // Optional if needed
  customCSS?: string; // Optional class names
  avtarWidth: string;
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ 
  playerName, 
  playerSide, 
  customCSS = "", 
  avtarWidth 
}) => {
  return (
    <div className={`flex ${customCSS}`}>
      <div className={`avatar | h-full ${avtarWidth} p-2`}>
        <MdIndeterminateCheckBox className="w-full h-full" />
      </div>
      <div className="flex flex-col w-full flex-1 justify-center">
        <span className="text-sm">{playerName}</span>
        <span className="text-sm">More Details</span>
      </div>
    </div>
  );
};

export default PlayerDetails;
