import fashion_seven from './fashion_seven.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(fashion_seven)
}