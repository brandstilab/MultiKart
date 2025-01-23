import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import React, { useEffect, useState } from "react";
import HomeParallaxBanner from "../Widgets/HomeParallaxBanner";

const Parallax = () => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "parallax" });
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    if (data?.parallax_banner?.banners.length > 0) {
      let banners = data?.parallax_banner?.banners?.filter((item) => item?.status);
      setBanners(banners);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  if (isLoading && document.body) return <Loader />;

  return (
    <section className="p-0">
      {banners?.map((banner, index) => (
        <HomeParallaxBanner key={index} classes="parallax-layout" banners={banner} text_right={index % 2 != 0 ? true : false} />
      ))}
    </section>
  );
};

export default Parallax;
