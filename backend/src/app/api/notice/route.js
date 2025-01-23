import { NextResponse } from "next/server";
import notice from "./notice.json";

export async function GET() {
  return await NextResponse.json(notice);
}
