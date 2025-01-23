import { NextResponse } from "next/server";
import user from "./user.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryIds = searchParams.get("ids");

  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let users = user?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag || queryIds) {
    // Filter by category
    if (queryCategory) {
      users = users.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      users = users.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    if (queryIds) {
      users = users.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    // Search filter by title
    if (querySearch) {
      users = users.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      users = users.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      users = users.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      users = users.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      users = users.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      users = users.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      users = users.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  users = users?.length ? users : user?.data;

  // Implementing pagination
  const totalusers = users.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedusers = users.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalusers / queryLimit),
    total: totalusers,
    per_page: queryLimit,
    data: paginatedusers, // the users for the current page
  };

  return NextResponse.json(response);
}
