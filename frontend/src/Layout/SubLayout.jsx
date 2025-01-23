import AuthModal from "@/Components/Auth/AuthModal";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import request from "@/Utils/AxiosUtils";
import { CompareAPI } from "@/Utils/AxiosUtils/API";
import TabFocusChecker from "@/Utils/CustomFunctions/TabFocus";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { usePathname, useSearchParams } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { useContext, useEffect, useState } from "react";
import ExitModal from "./ExitModal";
import Footers from "./Footer";
import Headers from "./Header";
import MobileMenu from "./Header/Widgets/MobileMenu";
import NewsLetterModal from "./NewsLetterModal";
import RecentPurchase from "./RecentPurchase";
import StickyCompare from "./StickyCompare";
import TapTop from "./TapTop";
import ThemeCustomizer from "./ThemeCustomizer";

const SubLayout = ({ children }) => {
  const isTabActive = TabFocusChecker();
  const { themeOption, setOpenAuthModal } = useContext(ThemeOptionContext);
  const [makeExitActive, setMakeExitActive] = useState(false);
  const path = useSearchParams();
  const theme = path.get("theme");
  const pathName = usePathname();
  const disableMetaTitle = ["product", "blogs", "brand"];
  const accountVerified = Cookies.get("uat");
  const authToast = Cookies.get("showAuthToast");

  const protectedRoutes = [`/account/dashboard`, `/account/notification`, `/account/wallet`, `/account/bank-details`, `/account/bank-details`, `/account/point`, `/account/refund`, `/account/order`, `/account/addresses`, `/wishlist`, `/compare`];

  useEffect(() => {
    if (!accountVerified && authToast && protectedRoutes.includes(pathName)) {
      ToastNotification("error", "Unauthenticated");
      setOpenAuthModal(true);
    }
    return () => Cookies.remove("showAuthToast");
  }, [pathName]);

  useEffect(() => {
    const setThemeColors = () => {
      let newThemeColor = "";
      let newThemeColor2 = "";

      if (theme) {
        if (theme === "fashion_one" || theme === "tools" || theme === "game" || theme === "left_sidebar" || theme === "video" || theme === "full_page") {
          newThemeColor = "#ec8951";
        } else if (theme === "bicycle" || theme === "christmas") {
          newThemeColor = "#ff4c3b";
        } else if (theme === "fashion_two") {
          newThemeColor = "#fe816d";
        } else if (theme === "fashion_three") {
          newThemeColor = "#96796d";
        } else if (theme === "fashion_three") {
          newThemeColor = "#96796d";
        } else if (theme === "fashion_four") {
          newThemeColor = "#000000";
        } else if (theme === "fashion_five") {
          newThemeColor = "#C0AA73";
        } else if (theme === "fashion_six") {
          newThemeColor = "#90453e";
        } else if (theme === "fashion_seven") {
          newThemeColor = "#3fd09e";
        } else if (theme === "furniture_one" || theme === "furniture_two" || theme === "furniture_dark" || theme === "jewellery_two" || theme === "jewellery_three") {
          newThemeColor = "#d4b196";
        } else if (theme === "electronics_one") {
          newThemeColor = "#1a7ef2";
        } else if (theme === "electronics_two") {
          newThemeColor = "#6d7e87";
        } else if (theme === "electronics_three") {
          newThemeColor = "#2874f0";
        } else if (theme === "marketplace_one") {
          newThemeColor = "#3e5067";
        } else if (theme === "marketplace_two" || theme === "marketplace_four") {
          newThemeColor = "#f39910";
          newThemeColor2 = "#394868";
        } else if (theme === "marketplace_three") {
          newThemeColor = "#387ef0";
        } else if (theme === "vegetables_one") {
          newThemeColor = "#ff5141";
        } else if (theme === "vegetables_two" || theme === "vegetables_three" || theme === "nursery") {
          newThemeColor = "#81ba00";
        } else if (theme === "jewellery_one") {
          newThemeColor = "#5fcbc4";
        } else if (theme === "vegetables_four") {
          newThemeColor = "#206664";
          newThemeColor2 = "#ee7a63";
        } else if (theme === "bag" || theme === "beauty") {
          newThemeColor = "#f0b54d";
        } else if (theme === "watch") {
          newThemeColor = "#e4604a";
        } else if (theme === "medical") {
          newThemeColor = "#38c6bb";
        } else if (theme === "perfume") {
          newThemeColor = "#6d6659";
        } else if (theme === "yoga") {
          newThemeColor = "#f0583d";
        } else if (theme === "marijuana") {
          newThemeColor = "#5d7227";
          newThemeColor2 = "#203f15";
        } else if (theme === "shoes") {
          newThemeColor = "#d57151";
        } else if (theme === "kids" || theme === "flower") {
          newThemeColor = "#fa869b";
        } else if (theme === "books") {
          newThemeColor = "#5ecee4";
        } else if (theme === "goggles") {
          newThemeColor = "#dc457e";
        } else if (theme === "video_slider") {
          newThemeColor = "#e38888";
        } else if (theme === "gym") {
          newThemeColor = "#01effc";
          newThemeColor2 = "#485ff2";
        } else if (theme === "digital_download") {
          newThemeColor = "#234ca1";
        } else if (theme === "pets") {
          newThemeColor = "#479FB3";
        } else if (theme === "parallax") {
          newThemeColor = "#866e6c";
        } else if (theme === "surfboard") {
          newThemeColor = "#2E94D2";
        } else if (theme === "single_product") {
          newThemeColor = "#854D9C";
          newThemeColor2 = "#d04ed6";
        } else if (theme === "gradient") {
          newThemeColor = "#dd5e89";
          newThemeColor2 = "#f7bb97";
        }
      } else {
        newThemeColor = themeOption?.general?.primary_color;
        newThemeColor2 = themeOption?.general?.secondary_color;
      }

      setThemeColor(newThemeColor);
      setThemeColor2(newThemeColor2);
    };

    setThemeColors();
  }, [theme, pathName]);

  //  Setting the current url in cookies for redirection of protected routes
  useEffect(() => {
    if (typeof window !== "undefined") {
      Cookies.set("currentPath", window.location.pathname + window.location.search);
    }
  }, [pathName, path]);

  const {
    data: CompareData,
    refetch,
    isLoading: getCompareLoading,
  } = useQuery(
    [CompareAPI],
    () => {
      if (Cookies.get("uat")) {
        return request({ url: CompareAPI });
      }
      return Promise.resolve(null); // Return null to avoid unnecessary loading
    },
    {
      enabled: false, // Initially disable fetching
      refetchOnWindowFocus: false,
      select: (res) => res?.data?.data,
    }
  );

  useEffect(() => {
    getCompareLoading && refetch();
  }, [getCompareLoading]);

  const [themeColor, setThemeColor] = useState("");
  const [themeColor2, setThemeColor2] = useState("");

  useEffect(() => {
    if (themeColor) {
      document.body.style.setProperty("--theme-color", themeColor);
    }
    if (themeColor2) {
      document.body.style.setProperty("--theme-color2", themeColor2);
    } else {
      document.body.style.removeProperty("--theme-color2");
    }
  }, [themeColor, themeColor2]);

  useEffect(() => {
    const message = themeOption?.general?.taglines;
    let timer;

    const updateTitle = (index) => {
      document.title = message[index];
      timer = setTimeout(() => {
        const nextIndex = (index + 1) % message.length;
        updateTitle(nextIndex);
      }, 500);
    };

    if (!disableMetaTitle.includes(pathName.split("/")[1].toLowerCase())) {
      if (!isTabActive && themeOption?.general?.exit_tagline_enable) {
        updateTitle(0);
      } else {
        let value = themeOption?.general?.site_title && themeOption?.general?.site_tagline ? `${themeOption?.general?.site_title} | ${themeOption?.general?.site_tagline}` : "Multikart Marketplace: Where Vendors Shine Together";
        document.title = value;
        clearTimeout(timer);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isTabActive, themeOption]);

  return (
    <>
      <Headers />
      {pathName?.split("/")[1].toLowerCase() != "product" && <MobileMenu />}
      {children}
      <AuthModal />
      {theme != "full_page" && <Footers />}
      <ThemeCustomizer />
      <NextTopLoader />
      <RecentPurchase />
      {themeOption?.popup?.news_letter?.is_enable && <NewsLetterModal setMakeExitActive={setMakeExitActive} />}
      <div className="compare-tap-top-box">
        {CompareData?.length > 0 && <StickyCompare CompareData={CompareData} />}
        <TapTop />
      </div>
      {themeOption?.popup?.exit?.is_enable && makeExitActive && <ExitModal dataApi={themeOption?.popup?.exit} headerLogo={themeOption?.logo?.header_logo?.original_url} />}
    </>
  );
};

export default SubLayout;
