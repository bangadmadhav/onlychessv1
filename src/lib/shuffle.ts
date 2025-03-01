import { GdataType } from "@/types/GameType";

export default async function shuffleGame(): Promise<GdataType | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/gamedata/random`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }

    const data = await response.json();

    if (!data.success || !data.data) {
      throw new Error("Invalid game data received");
    }

    return data.data as GdataType;
  } catch (error) {
    console.error("Error fetching game:", error);
    return null;
  }
}
