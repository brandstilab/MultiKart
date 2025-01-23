import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import request from "../AxiosUtils";
import { ForgotPasswordAPI } from "../AxiosUtils/API";
import { YupObject, emailSchema } from "../Validation/ValidationSchema";

export const ForgotPasswordSchema = YupObject({ email: emailSchema });

const useHandleForgotPassword = (setShowBoxMessage, setState) => {
  const router = useRouter();
  return useMutation((data) => request({ url: ForgotPasswordAPI, method: "post", data }, router), {
    onSuccess: (responseData, requestData) => {
      if (responseData.status === 200 || responseData.status === 201) {
        Cookies.set("ue", requestData.email);
        setState("otp");
      } else {
        setShowBoxMessage(responseData?.response.data.message);
      }
    },
  });
};
export default useHandleForgotPassword;