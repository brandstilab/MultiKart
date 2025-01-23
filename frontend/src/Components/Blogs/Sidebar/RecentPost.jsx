"use client";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import { placeHolderImage } from "@/Components/Widgets/Placeholder";
import BlogContext from "@/Context/BlogContext";
import request from "@/Utils/AxiosUtils";
import { BlogAPI } from "@/Utils/AxiosUtils/API";
import { showMonthWiseDateAndTime } from "@/Utils/CustomFunctions/DateFormate";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const RecentPost = () => {
  // const { blogState, refetch } = useContext(BlogContext);
  const { data: blogState, isLoading, refetch } = useQuery([BlogAPI], () => request({ url: BlogAPI, params: { paginate: 5 } }), { enabled: false, refetchOnWindowFocus: false, select: (res) => res?.data?.data });

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);
  // useEffect(() => {
  //   refetch();
  // }, []);
  const { t } = useTranslation("common");
  return (
    <div className="theme-card">
      <h4>{t("RecentBlog")}</h4>
      {blogState?.length > 0 ? (
        <ul className="recent-blog">
          {blogState?.slice(0, 5).map((blog, index) => (
            <li key={index}>
              <div className="media blog-box">
                <div className="blog-image">
                  <Image height={340} width={280} className="img-fluid lazyload" src={blog?.blog_thumbnail?.original_url ? blog?.blog_thumbnail?.original_url : placeHolderImage} alt="blog-image" />
                </div>
                <div className="media-body blog-content">
                  <h6>{showMonthWiseDateAndTime(blog?.created_at)}</h6>
                  <Link href={`/blogs/${blog?.slug}`}>
                    <h5>{blog.title}</h5>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <NoDataFound customClass="bg-light no-data-added" title="NoBlogsFound" />
      )}
    </div>
  );
};

export default RecentPost;
