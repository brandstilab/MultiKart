import store from './store.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(store)
}