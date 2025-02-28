import { NextResponse } from "next/server";
import { ApiError } from "@/types/ApiError";

export function handleApiError(error: unknown) {
  if (error instanceof ApiError) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode });
  }
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
