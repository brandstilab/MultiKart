import { NextResponse } from "next/server";
import license from "./license.json";

export async function GET() {
  return NextResponse.json(license);
}
