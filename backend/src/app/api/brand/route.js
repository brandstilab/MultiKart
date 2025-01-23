import { NextResponse } from "next/server";
import brand from "./brand.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryIds = searchParams.get("ids");

  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let brands = brand?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag || queryIds) {
    // Filter by category
    if (queryCategory) {
      brands = brands.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      brands = brands.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    if (queryIds) {
      brands = brands.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    // Search filter by title
    if (querySearch) {
      brands = brands.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      brands = brands.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      brands = brands.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      brands = brands.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      brands = brands.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      brands = brands.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      brands = brands.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  brands = brands?.length ? brands : brand?.data;

  // Implementing pagination
  const totalbrands = brands.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedbrands = brands.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalbrands / queryLimit),
    total: totalbrands,
    per_page: queryLimit,
    data: paginatedbrands, // the brands for the current page
  };

  return NextResponse.json(response);
}
