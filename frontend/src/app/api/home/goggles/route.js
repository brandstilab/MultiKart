import goggles from './goggles.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(goggles)
}