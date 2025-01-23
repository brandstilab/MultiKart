import themeOptions from './themeOptions.json'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(themeOptions);
}