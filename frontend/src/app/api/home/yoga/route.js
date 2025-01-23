import yoga from './yoga.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(yoga)
}