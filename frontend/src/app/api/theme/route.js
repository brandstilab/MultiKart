import { NextResponse } from "next/server";
import theme from "./theme.json";

export async function GET() {
  return NextResponse.json(theme);
}
