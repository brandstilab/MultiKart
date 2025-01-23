import count from "./count.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(count);
}
