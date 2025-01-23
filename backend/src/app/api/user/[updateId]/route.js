import user from "../user.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleUser = params.updateId;

  const userObj = user?.data.find((elem) => elem.id == singleUser);

  return NextResponse.json(userObj);
}
