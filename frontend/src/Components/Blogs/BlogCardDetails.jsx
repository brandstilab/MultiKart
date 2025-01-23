"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { placeHolderImage } from "../Widgets/Placeholder";
import BlogImageDetails from "./BlogImageDetails";

const BlogCardDetails = ({ Blog }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="blog-detail">
        {Blog?.blog_thumbnail?.original_url ? <Image height={642} width={1376} src={Blog?.blog_thumbnail?.original_url ? Blog?.blog_thumbnail?.original_url : placeHolderImage} loading="lazy" className="img-fluid" alt="" /> : null}
        <BlogImageDetails Blog={Blog} />
      </div>

      <div className="blog-detail-contain ckeditor-content">
        <p dangerouslySetInnerHTML={{ __html: Blog?.content }} />
      </div>
    </>
  );
};

export default BlogCardDetails;
