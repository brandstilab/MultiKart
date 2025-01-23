import wishlist from './wishlist.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(wishlist)
}