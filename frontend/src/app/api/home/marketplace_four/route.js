import marketplace_four from './marketplace_four.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(marketplace_four)
}