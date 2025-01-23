import { NextResponse } from "next/server";
import menu from "./menu.json";

export async function GET() {
  return NextResponse.json(menu);
}
