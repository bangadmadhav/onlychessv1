import { Gdata } from "@/model/Gdata.model";
import Board from "@/components/Board";
import ControlButtons from "@/components/ControlButtons";
import PlayerDetails from "@/components/PlayerDetails";

interface GamePageProps {
  initialGame: Gdata | null;
}

const GamePage: React.FC<GamePageProps> = ({ initialGame }) => {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-[15%] bg-zinc-800
                      max-lg:hidden"></div>
      <div className="w-[85%] flex px-5
                      max-lg:w-full">
        <div className="w-full h-full flex-1 flex justify-center items-center">
          <div className="w-full h-auto grid grid-rows-10 grid-cols-9">
            <div className="player-details | col-start-2 col-span-8 ">
              <PlayerDetails playerName={`Player 1`} customCSS={`h-full items-end`} avtarWidth={`w-[calc(100%/8)]`}/>
            </div>
            <div className="evaluation-bar | row-start-2 row-span-8">
              <div className="bar | w-[60%] h-full bg-black rounded"></div>
            </div>
            <div className="board-display | col-start-2 row-start-2 row-span-8 col-span-8">
              <Board />
            </div>
            <div className="player-details | col-start-2 row-start-10 col-span-8 ">
              <PlayerDetails playerName={`Player 2`} avtarWidth={`w-[calc(100%/8)]`}/>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col w-full h-full p-12">
            <div className="special-tag | w-full">1</div>
            <div className="comments | w-full">2</div>
            <div className="w-full">3</div>
            <div className="control-buttons | w-full">
              <ControlButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GamePage;

