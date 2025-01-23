import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import request from "../AxiosUtils";
import SuccessHandle from "../CustomFunctions/SuccessHandle";

const useCreate = (url, updateId, path = false, message, extraFunction, notHandler, setCouponError,refetch,setShowBoxMessage,responseType,errFunction) => {
  const router = useRouter();
  const pathName = usePathname();
  return useMutation((data) => request({ url: updateId ? `${url}/${Array.isArray(updateId) ? updateId.join("/") : updateId}` : url, data, method: "post",responseType: responseType ? responseType : "" }), {
    onSuccess: (resDta) => {
      !notHandler && SuccessHandle(resDta, router, path, message, setCouponError, pathName,setShowBoxMessage);
      extraFunction && extraFunction(resDta);
      refetch && refetch();
    },
    onError: (err) => {
      errFunction && errFunction(err);
      setShowBoxMessage(err)
      return err;
    },
  });
};

export default useCreate;
