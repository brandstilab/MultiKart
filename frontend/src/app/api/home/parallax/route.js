import parallax from './parallax.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(parallax)
}