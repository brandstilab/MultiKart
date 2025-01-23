import perfume from './perfume.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(perfume)
}