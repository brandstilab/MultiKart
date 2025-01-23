import { useQuery } from "@tanstack/react-query";
import request from "../AxiosUtils";
import { HomePageAPI } from "../AxiosUtils/API";

const useCustomDataQuery = ({ params }) => {
  return useQuery(
    ["data", params],
    async () => {
      const response = await request({ url: `${HomePageAPI}/${params}`, params: { slug: params } });
      return response?.data?.content;
    },
    {
      select: (data) => data,
      refetchOnWindowFocus: false,
      enabled:false
    }
  );
};

export default useCustomDataQuery;
