import page from "./page.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(page);
}
