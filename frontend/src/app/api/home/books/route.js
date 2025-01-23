import books from './books.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(books)
}