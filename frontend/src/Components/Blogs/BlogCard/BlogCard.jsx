import Link from "next/link";
import BlogContain from "./BlogContain";
import Image from "next/image";
import { placeHolderImage } from "@/Components/Widgets/Placeholder";

const BlogCardContain = ({ blog }) => {
  return (
    <>
      <div className="blog-image">
        <Link href={`/blogs/${blog.slug}`}>{blog?.blog_thumbnail?.original_url && <Image src={blog?.blog_thumbnail?.original_url || placeHolderImage} alt="blog-image" height={900} width={900} />}</Link>
      </div>
      <BlogContain blog={blog} />
    </>
  );
};

export default BlogCardContain;
