import marketplace_two from './marketplace_two.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(marketplace_two)
}