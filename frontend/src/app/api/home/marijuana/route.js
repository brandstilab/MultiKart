import marijuana from './marijuana.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(marijuana)
}