// "use client";

// import { useState } from "react";
// import { FaShuffle, FaPause, FaPlay } from "react-icons/fa6";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// interface ControlOption {
//   type: string;
//   onClickFunction: () => void;
//   icon: React.ReactNode;
// }

// const ControlButtons: React.FC = () => {
//   const [isPlay, setIsPlay] = useState<boolean>(false);
  

//   const shuffle = () => {
//     // Shuffle logic here
//   };

//   const previousMove = () => {
//     // Previous move logic here
//   };

//   const pauseplay = () => {
//     setIsPlay((prev) => !prev);
//   };

//   const nextMove = () => {
//     // Next move logic here
//   };

//   const iconSize = "w-[25px] h-[25px]";

//   const controlOptions: ControlOption[] = [
//     {
//       type: "shuffle",
//       onClickFunction: shuffle,
//       icon: <FaShuffle className={iconSize} />,
//     },
//     {
//       type: "prev",
//       onClickFunction: previousMove,
//       icon: <GrFormPrevious className={iconSize} />,
//     },
//     {
//       type: "pauseplay",
//       onClickFunction: pauseplay,
//       icon: isPlay ? <FaPause className={iconSize} /> : <FaPlay className={iconSize} />,
//     },
//     {
//       type: "next",
//       onClickFunction: nextMove,
//       icon: <GrFormNext className={iconSize} />,
//     },
//   ];

//   return (
//     <div className="flex w-full justify-between rounded bg-zinc-100 py-3 px-6">
//       {controlOptions.map(({ type, onClickFunction, icon }) => (
//         <div
//           key={type}
//           className={`${type} cursor-pointer w-[80px] h-[50px] flex justify-center items-center rounded bg-zinc-300 hover:bg-zinc-400`}
//           onClick={onClickFunction}
//         >
//           {icon}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ControlButtons;
"use client";

import { useGameContext } from "@/context/GameContext";
import shuffleGame from "@/lib/shuffle";

export default function ControlButtons() {
  const { nextMove, prevMove, togglePlay, isPlaying } = useGameContext();

  return (
    <div className="flex gap-4 mt-4">
      <button onClick={prevMove} className="p-2 bg-gray-200 rounded cursor-pointer">Previous</button>
      <button onClick={togglePlay} className="p-2 bg-blue-500 text-white rounded cursor-pointer">
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={nextMove} className="p-2 bg-gray-200 rounded cursor-pointer">Next</button>
      <button onClick={shuffleGame} className="p-2 bg-gray-200 rounded cursor-pointer">Shuffle</button>
    </div>
  );
}
