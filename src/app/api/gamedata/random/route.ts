import { NextResponse } from "next/server";
import GdataModel from "@/model/Gdata.model";
import dbConnect from "@/lib/dbConnect";
import { ApiError } from "@/types/ApiError";
import { handleApiError } from "@/lib/handleApiError";
import { ApiResponse } from "@/types/ApiResponse";

export async function GET() {
  try {
    await dbConnect();

    // Fetch a random game
    const randomGame = await GdataModel.aggregate([{ $sample: { size: 1 } }]);

    if (!randomGame.length) {
      throw new ApiError("No games found", 404);
    }

    return NextResponse.json({
      success: true,
      message: "Random game fetched successfully",
      data: randomGame[0],
    } as ApiResponse);
  } catch (error) {
    return handleApiError(error);
  }
}
