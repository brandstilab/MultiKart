import category from "../category.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleCategory = params.updateId;

  const categoryObj = category?.data.find((elem) => elem.id == singleCategory);

  return NextResponse.json(categoryObj);
}
