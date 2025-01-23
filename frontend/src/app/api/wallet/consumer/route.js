import wallet from './wallet.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(wallet)
}