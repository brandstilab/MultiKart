import digital_download from './digital_download.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(digital_download)
}