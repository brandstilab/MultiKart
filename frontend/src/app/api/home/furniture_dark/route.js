import furniture_dark from './furniture_dark.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(furniture_dark)
}