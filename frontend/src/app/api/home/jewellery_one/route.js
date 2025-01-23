import jewellery_one from './jewellery_one.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(jewellery_one)
}