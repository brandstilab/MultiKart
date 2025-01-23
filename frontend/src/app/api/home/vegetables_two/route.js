import vegetables_two from './vegetables_two.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(vegetables_two)
}