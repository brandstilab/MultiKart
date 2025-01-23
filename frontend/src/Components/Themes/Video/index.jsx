import Loader from "@/Layout/Loader";
import { storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import React, { useEffect } from "react";

const VideoHomePage = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "video" });

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
    <div id="block" style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div style={{ position: "absolute", zIndex: -1, inset: 0, overflow: "hidden", backgroundSize: "cover", backgroundColor: "transparent", backgroundRepeat: "no-repeat", backgroundPosition: "0% 50%", backgroundImage: `url(${storageURL + data?.video?.video_url})` }}>
        <video autoPlay loop muted style={{ margin: "auto", position: "absolute", zIndex: -1, top: "50%", left: "0%", transform: "translate(0%, -50%)", visibility: "visible", opacity: 1, width: "100%", height: "auto" }}>
          <source src={storageURL + data?.video?.video_url} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoHomePage;
