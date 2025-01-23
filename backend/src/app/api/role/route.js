import role from './role.json'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(role);
}