import country from "./country.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(country);
}
