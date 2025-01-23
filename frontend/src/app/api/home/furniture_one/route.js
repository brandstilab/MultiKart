import furniture_one from './furniture_one.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(furniture_one)
}