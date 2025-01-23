import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import { useContext } from "react";

const AboutUsImage = () => {
  const { themeOption } = useContext(ThemeOptionContext);

  return <div className="banner-section mt-2">{themeOption?.about_us?.about?.content_bg_image_url && <Image src={storageURL + themeOption?.about_us?.about?.content_bg_image_url} className="img-fluid" height={385} width={1370} alt="about-us-1" />}</div>;
};

export default AboutUsImage;
