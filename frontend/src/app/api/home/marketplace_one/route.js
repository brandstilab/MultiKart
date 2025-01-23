import marketplace_one from './marketplace_one.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(marketplace_one)
}