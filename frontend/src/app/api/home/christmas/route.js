import christmas from './christmas.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(christmas)
}