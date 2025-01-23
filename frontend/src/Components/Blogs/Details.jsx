"use client";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { BlogAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import WrapperComponent from "../Widgets/WrapperComponent";
import BlogCard from "./BlogCard";
import Sidebar from "./Sidebar/Sidebar";

const BlogDetail = () => {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const querySearchCategory = searchParams?.get("category");
  const querySearchTag = searchParams?.get("tag");
  const breadcrumbTitle = querySearchCategory ? `Blogs:${querySearchCategory}` : querySearchTag ? `Blogs:${querySearchTag}` : "Blogs";

  const {
    data: BlogData,
    isLoading,
    refetch,
  } = useQuery([BlogAPI, querySearchCategory, querySearchTag], () => request({ url: BlogAPI, params: { page, category: querySearchCategory ?? "", tag: querySearchTag ?? "", paginate: 12 } }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });
  useEffect(() => {
    refetch();
  }, [page, querySearchCategory,isLoading, querySearchTag]);

  if (isLoading) <Loader />;
  return (
    <>
      <Breadcrumbs title={breadcrumbTitle} subNavigation={[{ name: "Blog", link: "/blogs" }]} />
      <WrapperComponent classes={{ sectionClass: "blog-section blog-page ratio2_3 section-b-space", fluidClass: "container" }} customCol={true}>
        <Sidebar isLoading={isLoading} />
        <BlogCard page={page} setPage={setPage} BlogData={BlogData} isLoading={isLoading} />
      </WrapperComponent>
    </>
  );
};

export default BlogDetail;
