import tag from './tag.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(tag)
}