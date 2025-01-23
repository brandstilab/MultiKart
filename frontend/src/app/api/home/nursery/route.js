import nursery from './nursery.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(nursery)
}