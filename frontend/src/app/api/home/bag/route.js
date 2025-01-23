import bag from './bag.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(bag)
}