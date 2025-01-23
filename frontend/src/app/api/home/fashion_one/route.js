import fashion_one from './fashion_one.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(fashion_one)
}