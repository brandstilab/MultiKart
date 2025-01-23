import beauty from './beauty.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(beauty)
}