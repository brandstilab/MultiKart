import shoes from './shoes.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(shoes)
}