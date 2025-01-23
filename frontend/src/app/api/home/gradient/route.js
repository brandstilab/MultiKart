import gradient from './gradient.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(gradient)
}