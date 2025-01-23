import NoDataFound from "@/Components/Widgets/NoDataFound";
import BlogContext from "@/Context/BlogContext";
import { blog3Slider } from "@/Data/SliderSetting";
import request from "@/Utils/AxiosUtils";
import { BlogAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import Slider from "react-slick";

const HomeBlog = ({ blogIds, blogEffect, type, sliderClass, slideOptions }) => {
  const blogSliderSetting = slideOptions ? slideOptions : blog3Slider(blogIds?.length);
  const { blogState } = useContext(BlogContext);
  const router = useRouter();

  const {
    data: blogs,
    refetch,
    isLoading,
  } = useQuery([BlogAPI, blogIds], () => request({ url: BlogAPI, params: { ids: blogIds?.join(","), status: 1 } }, router), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data,
  });

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  // let blogs = blogState?.filter((blog) => blogIds?.includes(blog?.id));
  return (
    <div className="slide-3 no-arrow">
      {blogs?.length ? (
        <Slider {...blogSliderSetting} className={sliderClass ? sliderClass : ""}>
          {blogs?.map((blog, index) => (
            <div key={index}>
              {type === "simple" ? (
                <div className="blog-wrap">
                  <Link href={`/blogs/${blog?.slug}`}>
                    <div className="blog-image">
                      <img src={blog.blog_thumbnail.original_url} className="img-fluid" alt="" />
                    </div>
                    <div className="blog-details text-start p-0">
                      <h4>{new Date(blog?.created_at).toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric", hour: "numeric", minute: "numeric", hour12: true })}</h4>
                      <p>{blog.title}</p>
                      <h6>By: {blog.created_by.name}</h6>
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="col-12">
                  <Link href={`/blogs/${blog?.slug}`}>
                    <div className={blogEffect ? blogEffect : "classic-effect"}>
                      <div className="bg-size" style={{ backgroundImage: `url(${blog.blog_thumbnail.original_url})` }}>
                        <img src={blog.blog_thumbnail.original_url} className="img-fluid bg-img d-none" alt="blog-image" />
                      </div>
                      <span></span>
                    </div>
                  </Link>
                  <div className="blog-details">
                    <h4>{new Date(blog?.created_at).toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric", hour: "numeric", minute: "numeric", hour12: true })}</h4>
                    <Link href={`/blogs/${blog?.slug}`}>
                      <p>{blog.title}</p>
                    </Link>
                    <hr className="style1" />
                    <h6>By: {blog.created_by?.name}</h6>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      ) : (
        <NoDataFound customClass="no-data-added" title="NoBlogsFound" />
      )}
    </div>
  );
};

export default HomeBlog;
