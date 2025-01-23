import attribute from './attribute.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(attribute)
}