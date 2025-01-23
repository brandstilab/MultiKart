import request from "@/Utils/AxiosUtils";
import { BlogAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BlogIdsContext from ".";

const BlogIdsProvider = (props) => {
  const router = useRouter();
  const [getBlogIds, setGetBlogIds] = useState({});
  const [filteredBlog, setFilteredBlog] = useState([]);
  const { data, refetch, isLoading } = useQuery([BlogAPI, getBlogIds?.ids], () => request({ url: BlogAPI, params: { ...getBlogIds, status: 1 } }, router), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (data) => data.data.data,
  });
  useEffect(() => {
    Object.keys(getBlogIds).length > 0 && refetch();
  }, [getBlogIds?.ids]);

  useEffect(() => {
    if (data) {
      setFilteredBlog((prev) => data);
    }
  }, [isLoading, getBlogIds]);
  return <BlogIdsContext.Provider value={{ ...props, filteredBlog, setGetBlogIds, blogIdsLoader: isLoading }}>{props.children}</BlogIdsContext.Provider>;
};

export default BlogIdsProvider;
