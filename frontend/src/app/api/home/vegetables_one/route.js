import vegetables_one from './vegetables_one.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(vegetables_one)
}