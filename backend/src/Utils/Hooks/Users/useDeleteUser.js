import { useMutation } from "@tanstack/react-query";
import request from "../../AxiosUtils";
import { user } from "../../AxiosUtils/API";
import { useRouter } from "next/navigation";

const useDeleteRole = () => {
  const router = useRouter();
  return useMutation((deleteId) => request({ url: `${user}/${deleteId}`, method: "delete" },router));
};

export default useDeleteRole;
