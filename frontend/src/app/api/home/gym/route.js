import gym from './gym.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(gym)
}