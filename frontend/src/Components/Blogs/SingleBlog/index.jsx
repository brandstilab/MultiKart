"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { BlogAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import BlogCardDetails from "../BlogCardDetails";

const SingleBlog = ({ params }) => {
  const { data: Blog, isLoading, refetch } = useQuery([params], () => request({ url: `${BlogAPI}/slug/${params}` }), { enabled: true, refetchOnWindowFocus: false, select: (res) => res?.data });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs title={Blog?.title} subNavigation={[{ name: "Blogs", link: "/blogs" }, { name: Blog?.title }]} />
          <WrapperComponent classes={{ sectionClass: " ratio2_3 blog-detail-page section-b-space", fluidClass: "container" }} noRowCol={true}>
            <BlogCardDetails Blog={Blog} key={params} />
          </WrapperComponent>
        </>
      )}
    </>
  );
};

export default SingleBlog;
