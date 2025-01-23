import { NextResponse } from "next/server";
import notice from "../notice.json";

export async function GET(_, { params }) {
  const singleNotice = params.updateId;

  const noticeObj = notice?.data.find((elem) => elem.id == singleNotice);

  return NextResponse.json(noticeObj);
}
