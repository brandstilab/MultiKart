import refund from './refund.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(refund)
}