import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";

const AddToWishlist = ({ productObj, customClass }) => {
  const router = useRouter();
  const { setOpenAuthModal } = useContext(ThemeOptionContext);
  const handelWishlist = (productObj) => {
    if (Cookies.get("uat")) {
      // Put your logic here
      router.push("/wishlist");
    } else {
      setOpenAuthModal(true);
      ToastNotification("error", "Unauthenticated");
    }
  };
  return (
    <>
      {customClass ? (
        <a onClick={() => handelWishlist(productObj)} href={Href} className={customClass ? customClass : ""}>
          {productObj.is_wishlist ? <RiHeartFill className="theme-color" /> : <RiHeartLine />}
        </a>
      ) : (
        <li title="Wishlist" onClick={() => handelWishlist(productObj)}>
          <a className={"heart-icon"}>{productObj.is_wishlist ? <RiHeartFill className="theme-color" /> : <RiHeartLine />}</a>
        </li>
      )}
    </>
  );
};

export default AddToWishlist;
