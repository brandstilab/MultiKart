import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import request from "../AxiosUtils";
import SuccessHandle from "../CustomFunctions/SuccessHandle";
import { ToastNotification } from "../CustomFunctions/ToastNotification";

const useCreate = (url, updateId, path = false, message, extraFunction, notHandler, responseType, errFunction) => {
  const router = useRouter();
  const pathname = usePathname();
  return useMutation((data) => request({ url: updateId ? `${url}/${Array.isArray(updateId) ? updateId.join("/") : updateId}` : url, data, method: "post", responseType: responseType ? responseType : "" }, router), {
    onSuccess: (resDta) => {
      if (resDta?.response?.data?.success === !true) {
        ToastNotification("error", resDta?.response?.data?.message);
      } else {
        !notHandler && SuccessHandle(resDta, router, path, message, pathname);
        extraFunction && extraFunction(resDta);
      }
    },
    onError: (err) => {
      errFunction && errFunction(err);
      return err;
    },
  });
};

export default useCreate;
