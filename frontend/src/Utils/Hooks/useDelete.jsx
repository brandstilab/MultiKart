"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../AxiosUtils";
import SuccessHandle from "../CustomFunctions/SuccessHandle";

const useDelete = (url, refetch, deleteMessageNotShow) => {
  const queryClient = useQueryClient();
  return useMutation((deleteId) => request({ url: `${url}/${deleteId}`, method: "delete" }), {
    onSuccess: (resData) => {
      SuccessHandle(resData, false, false, !deleteMessageNotShow ? "Deleted Successfully" : "");
      refetch && queryClient.invalidateQueries({ queryKey: [refetch] });
    },
  });
};

export default useDelete;
