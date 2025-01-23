import { NextResponse } from "next/server";
import blog from "./blog.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let blogs = blog?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag) {
    // Filter by category
    if (queryCategory) {
      blogs = blogs.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      blogs = blogs.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    // Search filter by title
    if (querySearch) {
      blogs = blogs.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      blogs = blogs.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      blogs = blogs.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      blogs = blogs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      blogs = blogs.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      blogs = blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      blogs = blogs.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  blogs = blogs?.length ? blogs : blog?.data;

  // Implementing pagination
  const totalBlogs = blogs.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalBlogs / queryLimit),
    total: totalBlogs,
    per_page: queryLimit,
    data: paginatedBlogs, // the blogs for the current page
  };

  return NextResponse.json(response);
}
