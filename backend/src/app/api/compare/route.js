import { NextResponse } from "next/server";
import compare from './compare.json'

export async function GET(){
    return NextResponse.json(compare)
}