import { NextResponse } from "next/server";
import count from './count.json'

export async function GET(){
    NextResponse.json(count)
}