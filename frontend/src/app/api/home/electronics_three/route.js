import electronics_three from './electronics_three.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(electronics_three)
}