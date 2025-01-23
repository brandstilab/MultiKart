import state from './state.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(state)
}