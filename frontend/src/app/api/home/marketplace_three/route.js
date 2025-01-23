import marketplace_three from './marketplace_three.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(marketplace_three)
}