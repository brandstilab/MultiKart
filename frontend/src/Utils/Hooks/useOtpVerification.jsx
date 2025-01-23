import AccountContext from "@/Context/AccountContext";
import CartContext from "@/Context/CartContext";
import CompareContext from "@/Context/CompareContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import WishlistContext from "@/Context/WishlistContext";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import request from "../AxiosUtils";
import { CompareAPI, SyncCart, VerifyTokenAPI } from "../AxiosUtils/API";
import useCreate from "./useCreate";

const LoginWithMobileHandle = (responseData, router, refetch, compareRefetch, CallBackUrl, mutate, cartRefetch, setShowBoxMessage, addToWishlist, compareCartMutate, setOpenAuthModal, setState) => {
  setState("login");
  if (responseData.status === 200 || responseData.status === 201) {
    Cookies.set("uat", responseData.data?.access_token, { path: "/", expires: new Date(Date.now() + 24 * 60 * 6000) });
    const ISSERVER = typeof window === "undefined";
    if (typeof window !== "undefined") {
      Cookies.set("account", JSON.stringify(responseData.data));
      localStorage.setItem("account", JSON.stringify(responseData.data));
    }

    const oldCartValue = JSON.parse(localStorage.getItem("cart"))?.items;
    oldCartValue?.length > 0 && mutate(transformLocalStorageData(oldCartValue));
    refetch();
    compareRefetch();
    setOpenAuthModal(false);
    cartRefetch();
    router.push("/account/dashboard");
    const wishListID = Cookies.get("wishListID");
    const CompareId = Cookies.get("compareId");
    CompareId ? compareCartMutate({ product_id: CompareId }) : null;
    const productObj = { id: wishListID };
    wishListID ? addToWishlist(productObj) : null;
    router.push(`/${CallBackUrl}`);
    Cookies.remove("wishListID");
    Cookies.remove("compareId");
    localStorage.removeItem("cart");
  } else {
    setShowBoxMessage(responseData.response.data.message);
  }
};

const useOtpVerification = (setState) => {
  setTimeout(() => {
    setState("login");
  }, 2000);

  const { setOpenAuthModal } = useContext(ThemeOptionContext);
  const { mutate } = useCreate(SyncCart, false, false, "No");
  const { addToWishlist } = useContext(WishlistContext);
  const { mutate: compareCartMutate } = useCreate(CompareAPI, false, false, "Added to Compare List");
  const CallBackUrl = Cookies.get("CallBackUrl") ? Cookies.get("CallBackUrl") : Cookies.set("CallBackUrl", "/");
  const { refetch } = useContext(AccountContext);
  const { refetch: cartRefetch } = useContext(CartContext);
  const { refetch: compareRefetch } = useContext(CompareContext);
  const router = useRouter();
  return useMutation((data) => request({ url: VerifyTokenAPI, method: "post", data }, router), {
    onSuccess: (responseData, requestData) => LoginWithMobileHandle(responseData, router, refetch, compareRefetch, CallBackUrl, mutate, cartRefetch, setShowBoxMessage, addToWishlist, compareCartMutate, setOpenAuthModal, setState),
  });
};
export default useOtpVerification;
