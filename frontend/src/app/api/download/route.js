import { NextResponse } from "next/server";
import download from "./download.json";

export async function GET() {
  return NextResponse.json(download);
}
