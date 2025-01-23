import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import request from "@/Utils/AxiosUtils";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import HeaderEight from "./HeaderEight";
import HeaderFive from "./HeaderFive";
import HeaderFour from "./HeaderFour";
import HeaderOne from "./HeaderOne";
import HeaderSeven from "./HeaderSeven";
import HeaderSix from "./HeaderSix";
import HeaderThree from "./HeaderThree";
import HeaderTwo from "./HeaderTwo";

const Headers = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { setMenuLoader } = useContext(SettingContext);
  const [style, setStyle] = useState("");
  const path = useSearchParams();
  const theme = path.get("theme");

  const headerOptions = {
    header_one: <HeaderOne />,
    header_two: <HeaderTwo />,
    header_three: <HeaderThree />,
    header_four: <HeaderFour />,
    header_five: <HeaderFive />,
    header_six: <HeaderSix />,
    header_seven: <HeaderSeven />,
    header_eight: <HeaderEight />,
  };
  useEffect(() => {
    if (theme) {
      if (theme == "fashion_one" || theme == "gym" || theme == "fashion_seven" || theme == "fashion_two" || theme == "surfboard" || theme == "flower" || theme == "yoga" || theme == "fashion_three" || theme == "fashion_four" || theme == "electronics_two" || theme == "jewellery_three" || theme == "bag" || theme == "watch" || theme == "kids" || theme == "beauty" || theme == "goggles" || theme == "video_slider" || theme == "gradient" || theme == "left_sidebar" || theme == "parallax" || theme == "vegetables_three" || theme == "fashion_six" || theme == "jewellery_two" || theme == "medical" || theme == "perfume" || theme == "electronics_one" || theme == "marketplace_one" || theme == "tools" || theme == "game" || theme == "nursery") {
        setStyle("header_one");
      } else if (theme == "fashion_five") {
        setStyle("header_three");
      } else if (theme == "furniture_dark" || theme == "jewellery_one" || theme == "christmas" || theme == "digital_download" || theme == "single_product") {
        setStyle("header_four");
      } else if (theme == "furniture_one" || theme == "shoes" || theme == "vegetables_one" || theme == "marijuana") {
        setStyle("header_five");
      } else if (theme == "marketplace_four" || theme == "vegetables_two" || theme == "furniture_two" || theme == "electronics_three" || theme == "books" || theme == "pets" || theme == "marketplace_two" || theme == "marketplace_three") {
        setStyle("header_six");
      } else if (theme == "vegetables_four") {
        setStyle("header_two");
      } else if (theme == "bicycle") {
        setStyle("header_seven");
      } else if (theme == "video" || theme == "full_page") {
        setStyle("header_eight");
      }
    } else {
      let defaultStyle = themeOption?.header ? themeOption?.header?.header_options : "header_one";
      setStyle(defaultStyle);
    }
  }, [theme, style, themeOption, path]);

  const {
    data: headerMenu,
    refetch,
    isLoading,
  } = useQuery(["menu"], () => request({ url: "/menu" }), {
    select: (res) => {
      const originalData = res.data.data;
      const modifiedData = originalData.map((item) => ({
        ...item,
        class: `${["Product", "Mega Menu"].includes(item.title) ? 1 : 0}`,
      }));

      return modifiedData;
    },
    refetchOnWindowFocus: true,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => { }, [style]);

  return headerOptions[style];
};

export default Headers;
