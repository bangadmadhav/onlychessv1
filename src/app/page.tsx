import { Gdata } from "@/model/Gdata.model";
import GamePage from "./(frontend)/GamePage";
import { ApiError } from "@/types/ApiError";
import { handleApiError } from "@/lib/handleApiError";


export default async function Home() {
  let initialGame: Gdata | null = null;

  try {
    const response = await fetch(`${process.env.API_BASE_URI}/api/game/random`, {
      cache: "no-store",
    });if (!response.ok) {
      throw new ApiError("Failed to fetch game data", response.status);
    }

    const data = await response.json();

    if (!data.success || !data.data) {
      throw new ApiError("Invalid game data received", 500);
    }

    initialGame = data.data as Gdata;
  } catch (error) {
    handleApiError(error);
  }
  

  return <GamePage initialGame={initialGame} />;
}
