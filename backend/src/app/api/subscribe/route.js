import { NextResponse } from "next/server";
import subscribe from "./subscribe.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryIds = searchParams.get("ids");

  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let subscribes = subscribe?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag || queryIds) {
    // Filter by category
    if (queryCategory) {
      subscribes = subscribes.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      subscribes = subscribes.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    if (queryIds) {
      subscribes = subscribes.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    // Search filter by title
    if (querySearch) {
      subscribes = subscribes.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      subscribes = subscribes.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      subscribes = subscribes.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      subscribes = subscribes.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      subscribes = subscribes.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      subscribes = subscribes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      subscribes = subscribes.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  subscribes = subscribes?.length ? subscribes : subscribe?.data;

  // Implementing pagination
  const totalsubscribes = subscribes.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedsubscribes = subscribes.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalsubscribes / queryLimit),
    total: totalsubscribes,
    per_page: queryLimit,
    data: paginatedsubscribes, // the subscribes for the current page
  };

  return NextResponse.json(response);
}
