import request from "@/Utils/AxiosUtils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import MenuList from "./MenuList";

const MainHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState([]);
  const {
    data: headerMenu,
    refetch,
    isLoading,
    fetchStatus,
  } = useQuery(["menu"], () => request({ url: "/menu" }), {
    select: (res) => {
      const originalData = res.data.data;
      const modifiedData = originalData.map((item) => ({
        ...item,
        class: `${["Product", "Mega Menu"].includes(item.title) ? 1 : 0}`,
      }));

      return modifiedData;
    },
    refetchOnWindowFocus: true,
    enabled: false,
  });

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <ul className="skeleton-menu navbar-nav">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      ) : (
        <ul className="navbar-nav">
          {headerMenu?.map((menu, i) => (
            <MenuList menu={menu} key={i} customClass={`${!menu?.path ? "dropdown" : ""} nav-item `} level={0} isOpen={isOpen} setIsOpen={setIsOpen} />
          ))}
        </ul>
      )}
    </>
  );
};

export default MainHeaderMenu;
