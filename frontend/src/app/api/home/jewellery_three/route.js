import jewellery_three from './jewellery_three.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(jewellery_three)
}