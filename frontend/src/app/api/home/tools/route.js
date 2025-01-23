import tools from './tools.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(tools)
}