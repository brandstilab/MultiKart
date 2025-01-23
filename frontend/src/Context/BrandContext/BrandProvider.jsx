import request from "@/Utils/AxiosUtils";
import { BrandLogo } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BrandContext from ".";

const BrandProvider = (props) => {
  const [brandState, setBrandState] = useState([]);
  const [brandParams, setBrandParams] = useState("");
  const { data: BrandData, isLoading, refetch } = useQuery([BrandLogo], () => request({ url: BrandLogo }), { enabled: false, refetchOnWindowFocus: false, select: (res) => res?.data?.data });

  useEffect(() => {
    BrandData && setBrandState(BrandData);
  }, [isLoading]);

  const handleSetQueryParams = (value) => {
    setBrandParams(value);
  };

  return (
    <>
      <BrandContext.Provider value={{ isLoading, handleSetQueryParams, refetch, brandParams, brandState, setBrandParams, brandContextLoader: isLoading, ...props }}>{props.children}</BrandContext.Provider>
    </>
  );
};

export default BrandProvider;
