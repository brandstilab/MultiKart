import vegetables_three from './vegetables_three.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(vegetables_three)
}