import video from './video.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(video)
}