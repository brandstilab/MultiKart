import theme from './theme.json'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(theme);
}