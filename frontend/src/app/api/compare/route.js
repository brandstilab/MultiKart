import compare from './compare.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(compare)
}