import video_slider from './video_slider.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(video_slider)
}