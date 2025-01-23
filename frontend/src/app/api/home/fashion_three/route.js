import fashion_three from './fashion_three.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(fashion_three)
}