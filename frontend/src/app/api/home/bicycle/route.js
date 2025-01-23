import bicycle from './bicycle.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(bicycle)
}