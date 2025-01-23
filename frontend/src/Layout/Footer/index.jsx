"use client";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import FooterFour from "./FooterFour";
import FooterOne from "./FooterOne";
import FooterThree from "./FooterThree";
import FooterTwo from "./FooterTwo";

const Footers = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const [style, setStyle] = useState("");
  const path = useSearchParams();
  const theme = path.get("theme");

  useEffect(() => {
    if (theme) {
      if (theme == "fashion_three" || theme == "furniture_one" || theme == "surfboard" || theme == "yoga" || theme == "furniture_two" || theme == "fashion_four" || theme == "fashion_five" || theme == "fashion_seven" || theme == "furniture_dark" || theme == "electronics_one" || theme == "electronics_two" || theme == "marketplace_one" || theme == "marketplace_four" || theme == "vegetables_one" || theme == "vegetables_two" || theme == "jewellery_two" || theme == "vegetables_three" || theme == "vegetables_four" || theme == "jewellery_three" || theme == "watch" || theme == "medical" || theme == "kids" || theme == "books" || theme == "beauty" || theme == "left_sidebar" || theme == "goggles" || theme == "video_slider" || theme == "flower" || theme == "perfume" || theme == "gradient") {
        setStyle("footer_one");
      } else if (theme == "fashion_two" || theme == "single_product" || theme == "fashion_six" || theme == "bag" || theme == "marijuana" || theme == "game" || theme == "shoes" || theme == "jewellery_one") {
        setStyle("footer_two");
      } else if (theme == "fashion_one" || theme == "video" || theme == "full_page" || theme == "electronics_three" || theme == "marketplace_three" || theme == "bicycle" || theme == "marketplace_two" || theme == "pets" || theme == "nursery") {
        setStyle("footer_three");
      } else if (theme == "christmas" || theme == "tools" || theme == "gym" || theme == "digital_download") {
        setStyle("footer_four");
      }
    } else {
      let defaultStyle = themeOption?.footer ? themeOption?.footer?.footer_style : "footer_one";
      setStyle(defaultStyle);
    }
  }, [theme, style, themeOption, path]);

  return (
    <>
      {/* {theme != "full_page" ? ( */}
      <>
        {style == "footer_one" && <FooterOne />}
        {style == "footer_two" && <FooterTwo />}
        {style == "footer_three" && <FooterThree />}
        {style == "footer_four" && <FooterFour />}
      </>
      {/* ) : null} */}
    </>
  );
};

export default Footers;
