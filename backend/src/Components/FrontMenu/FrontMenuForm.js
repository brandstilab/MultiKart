import MenuContext from "@/Helper/MenuContext";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import request from "../../Utils/AxiosUtils";
import { Menu } from "../../Utils/AxiosUtils/API";
import useDelete from "../../Utils/Hooks/useDelete";
import Loader from "../CommonComponent/Loader";
import SearchCategory from "./Widgets/SearchCategory";

const FrontMenuForm = forwardRef(({ isLoading: loading }, ref) => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState([]);
  const { setMenuState } = useContext(MenuContext);
  const router = useRouter();

  // Get Menu Data
  const { data, refetch, isLoading } = useQuery([Menu], () => request({ url: Menu, params: { search: search } }, router), { enabled: false, refetchOnWindowFocus: false, select: (data) => data.data?.data });

  // Category Delete
  const { mutate: deleteMutate, isLoading: deleteLoading } = useDelete(Menu, false, (resData) => {
    if (resData?.status == 200 || resData?.status == 201) {
      refetch();
    }
  });
  useImperativeHandle(ref, () => ({
    call() {
      refetch();
    },
  }));
  // Refetching data while create, delete and update
  useEffect(() => {
    refetch();
  }, [search]);

  useEffect(() => {
    if (data) {
      setMenuState((prev) => [...data]);
    }
  }, [data, isLoading]);

  if (isLoading) return <Loader />;
  return <SearchCategory mutate={deleteMutate} deleteLoading={deleteLoading} setSearch={setSearch} data={data} active={active} setActive={setActive} />;
});

export default FrontMenuForm;
