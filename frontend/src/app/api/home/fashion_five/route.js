import fashion_five from './fashion_five.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(fashion_five)
}