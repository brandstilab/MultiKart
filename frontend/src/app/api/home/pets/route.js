import pets from './pets.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(pets)
}