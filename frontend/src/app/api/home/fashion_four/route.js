import fashion_four from './fashion_four.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(fashion_four)
}