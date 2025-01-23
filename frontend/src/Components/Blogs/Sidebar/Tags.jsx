"use client";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import request from "@/Utils/AxiosUtils";
import { TagAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const Tags = () => {
  const { data: BlogTagData, isLoading } = useQuery([TagAPI], () => request({ url: TagAPI, params: { type: "post" } }), {
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select: (data) => data.data.data,
  });

  return (
    <div className="theme-card">
      <h4>Tags</h4>
      {BlogTagData?.length > 0 ? (
        <ul className="tags">
          <li>
            <Link href={`/blogs`}>{"All"}</Link>
          </li>
          {BlogTagData?.map((tags, index) => (
            <li key={index}>
              <Link href={{ pathname: `/blogs`, query: { tag: tags?.slug } }}>{tags.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <NoDataFound customClass="bg-light no-data-added" title="NoTagsFound" />
      )}
    </div>
  );
};

export default Tags;
