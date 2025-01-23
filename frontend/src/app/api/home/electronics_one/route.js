import electronics_one from './electronics_one.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(electronics_one)
}