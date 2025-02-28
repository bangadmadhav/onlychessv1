import { NextResponse } from "next/server";
import GdataModel from "@/model/Gdata.model";
import dbConnect from "@/lib/dbConnect";
import { ApiError } from "@/types/ApiError";
import { handleApiError } from "@/lib/handleApiError";


let lastGameId: string | null = null; // Store last picked game ID

export async function GET() {
  try {
    await dbConnect();

    const query: any = [];
    
    // If we have a previous game, exclude it
    if (lastGameId) {
      query.push({ $match: { _id: { $ne: lastGameId } } });
    }

    // Randomly pick a game excluding the last one
    query.push({ $sample: { size: 1 } });

    const randomGame = await GdataModel.aggregate(query);

    if (!randomGame.length) {
        throw new ApiError("No games found", 404);
    }

    lastGameId = randomGame[0]._id; // Update last picked game ID

    return NextResponse.json(randomGame[0]);
  } catch (error) {
    return handleApiError(error); 
  }
}
