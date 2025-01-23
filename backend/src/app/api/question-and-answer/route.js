import { NextResponse } from "next/server";
import question from "./questions.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryIds = searchParams.get("ids");

  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let questions = question?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag || queryIds) {
    // Filter by category
    if (queryCategory) {
      questions = questions.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      questions = questions.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    if (queryIds) {
      questions = questions.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    // Search filter by title
    if (querySearch) {
      questions = questions.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      questions = questions.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      questions = questions.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      questions = questions.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      questions = questions.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      questions = questions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      questions = questions.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  questions = questions?.length ? questions : question?.data;

  // Implementing pagination
  const totalquestions = questions.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedquestions = questions.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalquestions / queryLimit),
    total: totalquestions,
    per_page: queryLimit,
    data: paginatedquestions, // the questions for the current page
  };

  return NextResponse.json(response);
}
