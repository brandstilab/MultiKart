import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import FooterOne from "../FooterOne";

const FooterFour = () => {
  const path = useSearchParams();
  const theme = path.get("theme");
  const [bgImg, setBgImg] = useState("");
  const { themeOption } = useContext(ThemeOptionContext);

  useEffect(() => {
    let backgroundImage = themeOption?.footer?.bg_image;
    if (theme) {
      if (theme == "christmas") {
        backgroundImage = `/storage/3865/christmas.jpg`;
      } else if (theme == "gym") {
        backgroundImage = `/storage/3873/gym.jpg`;
      } else if (theme == "tools") {
        backgroundImage = `/storage/3874/tools.jpg`;
      } else if (theme == "digital_download") {
        backgroundImage = `/storage/3872/digital.jpg`;
      }
    }

    setBgImg(backgroundImage);
  }, [theme, path, themeOption]);

  return (
    <div className="footer-background" style={{ backgroundImage: `URL(${storageURL + bgImg})` }}>
      <FooterOne />
    </div>
  );
};

export default FooterFour;
