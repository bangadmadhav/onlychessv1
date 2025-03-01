import { GdataType } from "@/types/GameType";
import GamePage from "./(frontend)/GamePage";
import { ApiError } from "@/types/ApiError";
import { handleApiError } from "@/lib/handleApiError";
import dbConnect from "@/lib/dbConnect";
import shuffleGame from "@/lib/shuffle";


export default async function Home() {
  
  let initialGame = await shuffleGame();
  //console.log(initialGame);

  return <GamePage initialGame={initialGame} />;
}
