import media from "./media.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(media);
}
