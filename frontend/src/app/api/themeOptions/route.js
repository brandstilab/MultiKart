import themeOption from './themeOption.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(themeOption)
}