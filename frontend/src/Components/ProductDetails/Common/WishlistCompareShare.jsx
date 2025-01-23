import CompareContext from "@/Context/CompareContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import WishlistContext from "@/Context/WishlistContext";
import { audioFile } from "@/Utils/Constants";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiHeartFill, RiHeartLine, RiRefreshLine, RiShareLine } from "react-icons/ri";
import ShareModal from "./ShareModal";
import { useRouter } from "next/navigation";

const WishlistCompareShare = ({ productState }) => {
  const { addToWishlist, removeWishlist } = useContext(WishlistContext);
  const [productWishlist, setProductWishlist] = useState("");
  const [addToWishlistAudio, setAddToWishlistAudio] = useState(new Audio(audioFile));
  const { t } = useTranslation("common");
  const { setOpenAuthModal } = useContext(ThemeOptionContext);
  const [modal, setModal] = useState(false);
  const { setOpenCompareSidebar, refetch } = useContext(CompareContext);
  const router = useRouter();
  const handelWishlist = () => {
    if (Cookies.get("uat")) {
      addToWishlistAudio.play();
      setProductWishlist((prev) => !prev);
      router.push("/wishlist");
    } else {
      setOpenAuthModal(true);
    }
  };

  useEffect(() => {
    setProductWishlist(productState?.product?.is_wishlist);
  }, [productState]);

  const addToCompare = () => {
    if (!Cookies.get("uat")) {
      setOpenAuthModal(true);
    } else {
      // Put your logic here
    }
  };

  return (
    <>
      <div className="buy-box compare-box">
        <a onClick={handelWishlist}>
          {productWishlist ? <RiHeartFill /> : <RiHeartLine />}
          <span>{t("AddToWishlist")}</span>
        </a>
        <a onClick={addToCompare}>
          <RiRefreshLine />
          <span>{t("AddToCompare")}</span>
        </a>
        {productState?.product?.social_share ? (
          <a onClick={() => setModal(true)}>
            <RiShareLine />
            <span>{t("Share")}</span>
          </a>
        ) : null}
      </div>
      <ShareModal productState={productState} modal={modal} setModal={setModal} />
    </>
  );
};

export default WishlistCompareShare;
