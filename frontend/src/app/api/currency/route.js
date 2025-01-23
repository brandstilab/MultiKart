import currency from './currency.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(currency)
}