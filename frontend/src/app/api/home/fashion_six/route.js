import fashion_six from './fashion_six.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(fashion_six)
}