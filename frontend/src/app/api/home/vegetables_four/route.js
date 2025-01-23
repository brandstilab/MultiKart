import vegetables_four from './vegetables_four.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(vegetables_four)
}