import { NextResponse } from "next/server";
import wishlist from "./wishlist.json";

export async function GET() {
  return NextResponse.json(wishlist);
}
