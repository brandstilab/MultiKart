import { NextResponse } from "next/server";
import page from './page.json'

export async function GET(){
    return NextResponse.json(page)
}