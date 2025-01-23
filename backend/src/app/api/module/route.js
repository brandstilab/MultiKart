import modules from './module.json'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(modules);
}