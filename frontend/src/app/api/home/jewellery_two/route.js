import { NextResponse } from "next/server";
import jewellery_two from "./jewellery_two.json";

export async function GET() {
  return NextResponse.json(jewellery_two);
}
