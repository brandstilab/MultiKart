import furniture_two from './furniture_two.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(furniture_two)
}