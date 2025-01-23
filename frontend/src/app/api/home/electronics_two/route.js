import electronics_two from './electronics_two.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(electronics_two)
}