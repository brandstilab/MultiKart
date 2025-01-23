import fashion_two from './fashion_two.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(fashion_two)
}