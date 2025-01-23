import full_page from './full_page.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(full_page)
}