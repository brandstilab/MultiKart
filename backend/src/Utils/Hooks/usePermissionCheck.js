import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import request from "../AxiosUtils";
import { selfData } from "../AxiosUtils/API";
import ConvertPermissionArr from "../CustomFunctions/ConvertPermissionArr";

const usePermissionCheck = (permissionTypeArr, keyToSearch) => {
  const [ansData, setAnsData] = useState([]);
  const path = usePathname();
  const moduleToSearch = keyToSearch ? keyToSearch : path.split("/")[1];
  const { data, isLoading, refetch } = useQuery([selfData], () => request({ url: selfData }), {
    enabled: true,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (data) {
      const securePaths = ConvertPermissionArr(data?.data?.permission);
      setAnsData(permissionTypeArr.map((permissionType) => Boolean(securePaths?.find((permission) => moduleToSearch == permission.name)?.permissionsArr.find((permission) => permission.type == permissionType))));
    }
  }, [isLoading]);

  return ansData;
};

export default usePermissionCheck;
