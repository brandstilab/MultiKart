import faq from "../faq.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleFaq = params.updateId;

  const faqObj = faq?.data.find((elem) => elem.id == singleFaq);

  return NextResponse.json(faqObj);
}
