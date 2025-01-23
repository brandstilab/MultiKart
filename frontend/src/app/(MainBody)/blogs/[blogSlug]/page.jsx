import SingleBlog from "@/Components/Blogs/SingleBlog";
export async function generateMetadata({ params }) {
  const blogData = await fetch(`${process.env.API_PROD_URL}/blog/slug/${params?.blogSlug}`)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
  return {
    title: blogData?.meta_title,
    description: blogData?.meta_description,
    images: [blogData?.blog_meta_image?.original_url, []],
    openGraph: {},
  };
}

const BlogDetailContent = ({ params }) => {
  return <>{params && <SingleBlog params={params?.blogSlug} />}</>;
};

export default BlogDetailContent;
