import self from './self.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(self)
}